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

:exit
echo.
echo.
timeout 5 /nobreak > nul
pause
exit /b