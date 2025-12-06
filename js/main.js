console.log('main loaded');
const newGameBtn = document.getElementById('newGameBtn');
const settingsBtn = document.getElementById('settingsBtn');
const exitBtn = document.getElementById('exitBtn');

const mainMenu = document.querySelector('.main-menu');

settingsBtn.addEventListener('click', openSettingsWindow);

function openNewGameWindow() {
    
}

function openSettingsWindow() {
    mainMenu.classList.toggle('hidden');
}

function openExitWindow() {
    
}