console.log('main loaded');
const newGameBtn = document.getElementById('newGameBtn');
const settingsBtn = document.getElementById('settingsBtn');
const exitBtn = document.getElementById('exitBtn');

const mainMenu = document.querySelector('.main-menu');
const settingsMenu = document.querySelector('.settings-menu');
const xIcon  = document.getElementById('xIcon');

settingsBtn.addEventListener('click', openSettingsWindow);
xIcon.addEventListener('click', openSettingsWindow);

function openNewGameWindow() {
    
}

function openSettingsWindow() {
    mainMenu.classList.toggle('hidden');
    settingsMenu.classList.toggle('hidden');
}

function openExitWindow() {
    
}