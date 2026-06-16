Write-Host "Type a short description of what changed, then press Enter:"
$msg = Read-Host
git add .
git commit -m $msg
git push origin main
Write-Host ""
Write-Host "Done! Your changes are saved to GitHub."
