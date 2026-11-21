"""Export the committed main branch and its Git history as a portable ZIP."""

import argparse
import os
from pathlib import Path
import subprocess
from tempfile import TemporaryDirectory
from zipfile import ZIP_DEFLATED, ZipFile


ROOT = Path(__file__).resolve().parents[1]
BRANCH = "refs/heads/main"
PREFIX = "App-Marketing-Kit/"


def git(*args):
    return subprocess.check_output(["git", "-C", str(ROOT), *args], text=True).strip()


def export(output):
    commit = git("rev-parse", BRANCH)
    with TemporaryDirectory(prefix=".kit-export-", dir=output.parent) as temporary:
        work = Path(temporary)
        bundle = work / "App-Marketing-Kit.bundle"
        archive = work / output.name
        git("archive", "--format=zip", f"--prefix={PREFIX}", f"--output={archive}", commit)

        # A temporary bare repository fixes the default branch and export revision.
        bare = work / "bundle-source.git"
        git("init", "--quiet", "--bare", "--initial-branch=main", str(bare))
        git("-C", str(bare), "fetch", "--quiet", "--no-tags", str(ROOT), commit)
        git("-C", str(bare), "update-ref", BRANCH, commit)
        git("-C", str(bare), "bundle", "create", str(bundle), BRANCH, "HEAD")

        with ZipFile(archive, "a", ZIP_DEFLATED) as zip_file:
            zip_file.write(bundle, PREFIX + bundle.name)
        with ZipFile(archive) as zip_file:
            bad_file = zip_file.testzip()
            if bad_file:
                raise RuntimeError(f"Invalid ZIP entry: {bad_file}")
        os.replace(archive, output)
    print(f"Exported {commit} to {output}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Path of the ZIP file to create or replace")
    export(parser.parse_args().output.resolve())
