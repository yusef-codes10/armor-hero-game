console.log('settings loaded');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');

let currentTheme = null; // a var to hold the music to play
let currentThemeIndex = 0;

playBtn.addEventListener('click', playMainTheme);
stopBtn.addEventListener('click', stopMainTheme);

// music player is here
const mainTheme = new Audio('../assets/sound/main-theme.mp3');
const fightTheme = new Audio('../assets/sound/fight-theme.mp3');

// declaring the themes array
const themes = [mainTheme, fightTheme];
console.log(themes);

function playMainTheme() {
    mainTheme.play();
}

function stopMainTheme() {
    mainTheme.pause();
}

function palyNextTheme() {
    currentTheme++;
}

// ! there are two methods, use arrow buttons to browse, or a select input
