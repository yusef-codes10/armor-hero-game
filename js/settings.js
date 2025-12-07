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

function playMainTheme(currentTheme) {
    currentTheme.play();
}

function stopMainTheme() {
    currentTheme.pause();
}

function palyNextTheme() {
    currentThemeIndex++;
    currentTheme = themes[currentThemeIndex];
}

// ! there are two methods, use arrow buttons to browse, or a select input
