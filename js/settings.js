console.log('settings loaded');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

let currentTheme = null; // a var to hold the music to play

playBtn.addEventListener('click', playMainTheme);
stopBtn.addEventListener('click', stopMainTheme);

// music player is here
const mainTheme = new Audio('../assets/sound/main-theme.mp3');
const fightTheme = new Audio('../assets/sound/fight-theme.mp3');

function playMainTheme() {
    mainTheme.play();
}

function stopMainTheme() {
    mainTheme.pause();
}