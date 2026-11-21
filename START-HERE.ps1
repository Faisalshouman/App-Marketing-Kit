# App Marketing Kit launcher — no external actions.
param(
  [ValidateSet('status','codex','claude')]
  [string]$Agent = 'status'
)
$ErrorActionPreference = 'Stop'
Push-Location $PSScriptRoot
try {
  $node = Get-Command node -ErrorAction SilentlyContinue
  if (-not $node) {
    Write-Error 'Node.js 20+ is required for the local workboard. Install Node and retry.'
    exit 1
  }
  node tools/validate.mjs
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
  node tools/marketing.mjs status
  if ($Agent -ne 'status') {
    $cli = Get-Command $Agent -ErrorAction SilentlyContinue
    if (-not $cli) { Write-Error "$Agent CLI is not installed or not in PATH."; exit 1 }
    Write-Host "Starting $Agent in the marketing workspace. No accounts or external publishing tools are auto-connected."
    & $Agent
  }
} finally {
  Pop-Location
}
