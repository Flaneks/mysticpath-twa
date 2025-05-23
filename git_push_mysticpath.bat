@echo off
setlocal

REM === Укажи свои данные! ===
set "GIT_USER=Flaneks"
set "REPO_NAME=mysticpath-twa"
set "REMOTE=https://github.com/%GIT_USER%/%REPO_NAME%.git"

REM === Инициализация git ===
cd /d "%~dp0"
git init
git add .
git commit -m "Первый коммит MysticPath TWA"

REM === Создать репозиторий на GitHub (если установлен gh CLI) ===
where gh >nul 2>nul
if %errorlevel%==0 (
    gh repo create %REPO_NAME% --public --source=. --remote=origin --push
) else (
    echo gh CLI не найден. Пропускаю создание репозитория на GitHub.
    git remote add origin %REMOTE%
    git branch -M main
    git push -u origin main
)

REM === Открыть ссылку на GitHub ===
start "" "https://github.com/%GIT_USER%/%REPO_NAME%"

echo ==========================================
echo Всё готово! Проверь свой репозиторий.
pause
endlocal
