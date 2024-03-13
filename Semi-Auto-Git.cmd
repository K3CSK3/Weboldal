@echo off
pushd %~0\..
:question
set /p pullorpush="Pull vagy Push? (pull/push) > "
if /i %pullorpush%==pull (goto :pull) 
if /i %pullorpush%==push (goto :push) else (goto :question)

:pull
@echo on
git pull
@echo off
goto :exit
:push
set /p comment="Commit neve > "

@echo on
git add .
@echo off
if not %errorlevel%==0 (goto :exit)

@echo on
git commit -m "%date% - %comment%"
@echo off
if not %errorlevel%==0 (goto :exit)

@echo on
git push
@echo off

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

:exit
echo.
echo.
timeout 5 /nobreak > nul
pause
exit /b