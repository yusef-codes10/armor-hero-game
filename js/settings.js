console.log('settings loaded');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');

playBtn.addEventListener('click', playMainTheme);

// music player is here
const mainTheme = new Audio('../assets/sound/main-theme.mp3');

function playMainTheme() {
    mainTheme.play();
}