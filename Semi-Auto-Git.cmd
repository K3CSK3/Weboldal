pushd %~0\..
git pull
set /p comment="Commit neve > "

git add .
if not %errorlevel%==0 (goto:error)
@echo off

git commit -m "%date% - %comment%"
if not %errorlevel%==0 (goto:error)
set /p mode="Pull(1) or Push(2)"

git push
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