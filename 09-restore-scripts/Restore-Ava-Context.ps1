#Requires -Version 5.1
<#
.SYNOPSIS
  Merge emergency Ava context pack back into a RootMC tree.

.PARAMETER RootMcPath
  Target RootMC root (default: E:\.1 Work Stations\RootMC).

.PARAMETER PackRoot
  This emergency pack folder (default: parent of 09-restore-scripts).

.PARAMETER IncludeSecrets
  Also copy 07-secrets-LOCAL-ONLY\RootMC.env -> RootMcPath\.env
#>
param(
  [string]$RootMcPath = 'E:\.1 Work Stations\RootMC',
  [string]$PackRoot = '',
  [switch]$IncludeSecrets
)

$ErrorActionPreference = 'Stop'
if (-not $PackRoot) {
  $PackRoot = Split-Path (Split-Path $PSScriptRoot -Parent) -Parent
  # Script lives in PackRoot\09-restore-scripts → PackRoot is parent
  $PackRoot = Split-Path $PSScriptRoot -Parent
}

function Ensure-Dir([string]$p) {
  if (-not (Test-Path -LiteralPath $p)) {
    New-Item -ItemType Directory -Force -Path $p | Out-Null
  }
}

function Copy-Tree([string]$src, [string]$dst) {
  if (-not (Test-Path -LiteralPath $src)) {
    Write-Warning "Missing source: $src"
    return
  }
  Ensure-Dir $dst
  & robocopy $src $dst /E /XO /NFL /NDL /NJH /NJS /nc /ns /np | Out-Null
  Write-Host "merged $src -> $dst (robocopy exit $LASTEXITCODE)"
}

Write-Host "Pack: $PackRoot"
Write-Host "Root: $RootMcPath"
if (-not (Test-Path -LiteralPath $RootMcPath)) {
  throw "RootMC path not found: $RootMcPath"
}

$avaDst = Join-Path $RootMcPath 'Web Files\rootmc-ava'
$deskDst = Join-Path $RootMcPath 'Web Files\rootmc-ava-desktop'
$handDst = Join-Path $RootMcPath 'Server Handoffs\Ava Ivy'
$rulesDst = Join-Path $RootMcPath '.cursor\rules'
$lapDst = Join-Path $RootMcPath 'Ava Laptop'

Copy-Tree (Join-Path $PackRoot '02-ava-core-src-select\src') (Join-Path $avaDst 'src')
Copy-Tree (Join-Path $PackRoot '02-ava-core-src-select\scripts') (Join-Path $avaDst 'scripts')
Copy-Tree (Join-Path $PackRoot '02-ava-core-src-select\docs') (Join-Path $avaDst 'docs')
Copy-Tree (Join-Path $PackRoot '02-ava-core-src-select\assets') (Join-Path $avaDst 'assets')

# Personality overlays (newer packed files win when /XO not used — force key voice files)
$pers = Join-Path $PackRoot '01-personality-src'
if (Test-Path -LiteralPath $pers) {
  Get-ChildItem -LiteralPath $pers -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Substring($pers.Length).TrimStart('\','/')
    $out = Join-Path $avaDst $rel
    Ensure-Dir (Split-Path $out)
    Copy-Item -LiteralPath $_.FullName -Destination $out -Force
  }
  Write-Host "overlayed personality-src onto rootmc-ava"
}

Copy-Tree (Join-Path $PackRoot '03-handoff-Ava-Ivy') $handDst
Copy-Tree (Join-Path $PackRoot '05-desktop-kit\rootmc-ava-desktop') $deskDst
Copy-Tree (Join-Path $PackRoot '05-desktop-kit\Ava Laptop') $lapDst

$rulesSrc = Join-Path $PackRoot '04-cursor-rules-ava'
if (Test-Path -LiteralPath $rulesSrc) {
  Ensure-Dir $rulesDst
  Get-ChildItem -LiteralPath $rulesSrc -File | ForEach-Object {
    Copy-Item $_.FullName (Join-Path $rulesDst $_.Name) -Force
  }
  Write-Host "restored cursor Ava rules"
}

if ($IncludeSecrets) {
  $envSrc = Join-Path $PackRoot '07-secrets-LOCAL-ONLY\RootMC.env'
  if (-not (Test-Path -LiteralPath $envSrc)) {
    $envSrc = Join-Path $PackRoot '07-secrets-LOCAL-ONLY\RootMC.env.from-D.env'
  }
  if (Test-Path -LiteralPath $envSrc) {
    Copy-Item -LiteralPath $envSrc -Destination (Join-Path $RootMcPath '.env') -Force
    Write-Host "restored .env from secrets pack"
  } else {
    Write-Warning "No secrets file found under 07-secrets-LOCAL-ONLY"
  }
}

Write-Host ''
Write-Host 'Next:'
Write-Host "  cd `"$avaDst`""
Write-Host '  npm run ensure-deps'
Write-Host "  # or: `"$lapDst\Start-Ava-Laptop.cmd`""
Write-Host 'Done.'
