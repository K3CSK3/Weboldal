pushd %~0\..

@echo off

set /p mode="Pull(1) or Push(2)"

if %mode%==1 (
    git pull
    )

if %mode%==2 (
    set /p comment="Commit neve > "
    git add .
    if not %errorlevel%==0 (goto:error)

    git commit -m "%date% - %comment%"
    if not %errorlevel%==0 (goto:error)

    git push
)
timeout 5 /nobreak
@echo on
exit /b

:error
echo.
echo.
timeout 5 /nobreak > nul
pause
exit /b