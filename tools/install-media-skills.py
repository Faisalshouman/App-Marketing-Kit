"""Restore the skill pack revisions recorded in media-requirements.json."""

import argparse
import json
from pathlib import Path
import re
import shutil
import subprocess
import tempfile


MANIFEST = Path(__file__).resolve().parents[1] / "media-requirements.json"


def git(directory, *args):
    return subprocess.check_output(["git", "-C", str(directory), *args], text=True).strip()


def checkout(repo, commit, directory):
    if not re.fullmatch(r"https://github\.com/[\w.-]+/[\w.-]+", repo):
        raise ValueError(f"Expected a GitHub repository URL, got {repo}")
    if not re.fullmatch(r"[0-9a-f]{40}", commit):
        raise ValueError(f"Expected a full Git commit, got {commit}")
    git(directory, "init", "--quiet")
    git(directory, "remote", "add", "origin", repo)
    git(directory, "fetch", "--quiet", "--depth", "1", "origin", commit)
    git(directory, "checkout", "--quiet", "--detach", "FETCH_HEAD")
    if git(directory, "rev-parse", "HEAD") != commit:
        raise RuntimeError(f"Checkout did not match {commit}")


def copy_runtime(source, destination, paths):
    for relative in paths:
        original = source / relative
        target = destination / relative
        target.parent.mkdir(parents=True, exist_ok=True)
        if original.is_dir():
            shutil.copytree(original, target)
        else:
            shutil.copy2(original, target)


def install(pack):
    root = Path.home() / pack.get("destinationRoot", ".agents/skills")
    dest = root / pack["destination"]
    if dest.exists():
        count = len(list(dest.rglob("SKILL.md")))
        if count != pack["count"]:
            raise RuntimeError(f"Existing {dest} contains {count} skills, expected {pack['count']}")
        print(f"Preserved {dest} ({count} skill files)")
        return
    root.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=".media-skills-", dir=root) as temp:
        temp = Path(temp)
        source = temp / "checkout"
        source.mkdir()
        checkout(pack["repo"], pack["commit"], source)
        staged = temp / "install"
        mode = pack["mode"]
        if mode == "checkout":
            staged = source
        elif mode == "ffmpeg-skill-runtime":
            copy_runtime(source, staged, pack["runtimePaths"])
        elif mode == "skill-folders":
            upstream_root = source / pack["skillRoot"]
            folders = [p for p in upstream_root.iterdir() if (p / "SKILL.md").is_file()]
            folders.extend(source / relative for relative in pack.get("extraPaths", []))
            staged.mkdir()
            for folder in folders:
                shutil.copytree(folder, staged / folder.name)
        else:
            raise ValueError(f"Unknown skill pack mode {mode}")
        if len(list(staged.rglob("SKILL.md"))) != pack["count"]:
            raise RuntimeError(f"Unexpected skill count for {pack['id']}")
        if dest.exists():
            raise FileExistsError(dest)
        staged.rename(dest)
    print(f"Installed {pack['count']} skills at {dest}")


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    packs = {pack["id"]: pack for pack in manifest["skillPacks"]}
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pack", action="append", choices=packs, help="Select a pack. Defaults to all packs.")
    parser.add_argument("--apply", action="store_true", help="Install missing packs. The default prints the plan.")
    args = parser.parse_args()
    for pack_id in args.pack or packs:
        pack = packs[pack_id]
        if args.apply:
            install(pack)
        else:
            print(f"{pack_id}: {pack['count']} skills from {pack['repo']} at {pack['commit']}")


if __name__ == "__main__":
    main()
