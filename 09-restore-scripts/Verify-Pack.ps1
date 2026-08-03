#Requires -Version 5.1
param(
  [string]$PackRoot = ''
)

if (-not $PackRoot) { $PackRoot = Split-Path $PSScriptRoot -Parent }

$required = @(
  '00-README\README.md',
  '01-personality-src\src\persona.mjs',
  '01-personality-src\src\people.mjs',
  '01-personality-src\src\config.mjs',
  '01-personality-src\src\avaPost.mjs',
  '02-ava-core-src-select\src',
  '02-ava-core-src-select\scripts',
  '03-handoff-Ava-Ivy',
  '04-cursor-rules-ava\ava-identity-posts.mdc',
  '04-cursor-rules-ava\ava-phase-catchup.mdc',
  '05-desktop-kit\Ava Laptop\Start-Ava-Laptop.cmd',
  '06-manifests-ids\IDENTITIES.md',
  '06-manifests-ids\ids.json',
  '07-secrets-LOCAL-ONLY\README-SECRETS.txt',
  '08-env-keys-checklist\REQUIRED-ENV-KEYS.md',
  '09-restore-scripts\Restore-Ava-Context.ps1',
  '10-build-context\00-README\HOW-SHE-WAS-BUILT.md',
  '10-build-context\docs-persona\rootmc-lead-dev-bot-notes.md',
  '10-build-context\plans-build\ava-ivy-lead-dev-build-plan.md',
  '10-build-context\agent-transcripts'
)

$missing = @()
foreach ($r in $required) {
  $p = Join-Path $PackRoot $r
  if (-not (Test-Path -LiteralPath $p)) { $missing += $r }
}

Write-Host "Pack: $PackRoot"
Write-Host ''

$sections = @(
  '01-personality-src','02-ava-core-src-select','03-handoff-Ava-Ivy',
  '04-cursor-rules-ava','05-desktop-kit','06-manifests-ids',
  '07-secrets-LOCAL-ONLY','08-env-keys-checklist','09-restore-scripts',
  '10-build-context','00-README'
)
foreach ($s in $sections) {
  $p = Join-Path $PackRoot $s
  if (-not (Test-Path -LiteralPath $p)) {
    Write-Host "[MISSING DIR] $s"
    continue
  }
  $files = Get-ChildItem -LiteralPath $p -Recurse -File -ErrorAction SilentlyContinue
  $mb = [math]::Round((($files | Measure-Object Length -Sum).Sum / 1MB), 2)
  Write-Host ("[{0,5} files | {1,8} MB] {2}" -f $files.Count, $mb, $s)
}

Write-Host ''
$secEnv = Join-Path $PackRoot '07-secrets-LOCAL-ONLY\RootMC.env'
$secEnvD = Join-Path $PackRoot '07-secrets-LOCAL-ONLY\RootMC.env.from-D.env'
if (Test-Path -LiteralPath $secEnv) { Write-Host '[OK] secrets RootMC.env present' }
elseif (Test-Path -LiteralPath $secEnvD) { Write-Host '[OK] secrets RootMC.env.from-D.env present' }
else { Write-Host '[WARN] no .env snapshot in 07-secrets-LOCAL-ONLY'; $missing += '07-secrets-LOCAL-ONLY/*.env' }

if ($missing.Count -eq 0) {
  Write-Host ''
  Write-Host 'VERIFY PASS — pack looks complete for Ava context restore.'
  exit 0
}

Write-Host ''
Write-Host 'VERIFY FAIL — missing:'
$missing | ForEach-Object { Write-Host "  - $_" }
exit 1
