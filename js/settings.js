console.log('settings loaded');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');

playBtn.addEventListener('click', playMainTheme);
stopBtn.addEventListener('click', stopMainTheme);
nextBtn.addEventListener('click', palyNextTheme);

// music player is here
const mainTheme = new Audio('../assets/sound/main-theme.mp3');
const fightTheme = new Audio('../assets/sound/fight-theme.mp3');

// declaring the themes array
const themes = [mainTheme, fightTheme];
console.log(themes);

let currentTheme; // a var to hold the music to play
let currentThemeIndex = 0;
console.log(currentTheme);

function playMainTheme() {
    currentTheme.play();
}

function stopMainTheme() {
    currentTheme.pause();
}

function palyNextTheme() {
    // ! have to secure getting out of bounds
    if (currentThemeIndex >= themes.length) {
        currentThemeIndex = 0;
    }
    currentThemeIndex++;
    currentTheme = themes[currentThemeIndex];
    console.log(currentThemeIndex);
    console.log(currentTheme);
    playMainTheme();
}

console.log(currentTheme);

// ! there are two methods, use arrow buttons to browse, or a select input
