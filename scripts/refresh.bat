@echo off
setlocal enabledelayedexpansion

:: 设置要刷新的网页 URL
set "URL=https://m.weibo.cn/status/5102315595628866"

:: 设置刷新间隔（秒）
set "INTERVAL=45"

:: 检查是否安装了 curl
where curl >nul 2>nul
if %errorlevel% neq 0 (
    echo Error: curl is not installed.
    echo Please install curl or add it to your PATH.
    pause
    exit /b 1
)

echo Starting auto-refresh for %URL%
echo Refresh interval: %INTERVAL% seconds
echo Press Ctrl+C to stop

:loop
echo [%time%] Refreshing page...
curl -s -o nul "%URL%"
timeout /t %INTERVAL% /nobreak >nul
goto loop
