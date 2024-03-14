@echo off
net file 1>nul 2>nul
if not %errorlevel% == 0 (
    powershell.exe Start-Process '%~0' -Verb runas
    exit
)
pushd %~0\..
:choice
set /p choice="Push(1) vagy pull(2)? > "
if %choice% == 1 (
    goto :push
)
if %choice% == 2 (
    goto :pull
) else (
    echo Hibás válasz
    timeout 2 /nobreak >nul
    goto :choice
)

:push
git add .
set /p commit="Commit message > "
git commit -m "%date%-%commit%"
git push
goto :end

:pull
git pull
goto :end

:end
net helpmsg %errorlevel%
timeout 5 /nobreak >nul
exit /b %errorlevel%