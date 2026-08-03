# Stop Ava brain + laptop UI processes
$ErrorActionPreference = "SilentlyContinue"
Get-CimInstance Win32_Process -Filter "Name='node.exe'" |
  Where-Object { $_.CommandLine -match 'rootmc-ava\\src\\(index|server|poller)\.mjs' } |
  ForEach-Object {
    Write-Host "Stopping Ava pid $($_.ProcessId)"
    Stop-Process -Id $_.ProcessId -Force
  }
Get-CimInstance Win32_Process -Filter "Name='Ava Ivy.exe'" |
  ForEach-Object {
    Write-Host "Stopping UI pid $($_.ProcessId)"
    Stop-Process -Id $_.ProcessId -Force
  }
Write-Host "Done."
