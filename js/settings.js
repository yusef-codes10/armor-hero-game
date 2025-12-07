console.log('settings loaded');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const nextBtn = document.getElementById('nextBtn');
const currentThemeHeader = document.getElementById('currentThemeHeader');

playBtn.addEventListener('click', playMainTheme);
stopBtn.addEventListener('click', stopMainTheme);
nextBtn.addEventListener('click', palyNextTheme);

// music player is here
const mainTheme = new Audio('../assets/sound/main-theme.mp3');
const fightTheme = new Audio('../assets/sound/fight-theme.mp3');
const romanceTheme = new Audio('../assets/sound/romance-theme.mp3');

// declaring the themes array
const themes = [mainTheme, fightTheme, romanceTheme];
console.log(themes);

let currentTheme; // a var to hold the music to play
let currentThemeIndex = 0;
console.log(currentTheme);

function playMainTheme() {  // fix: different args name or not at all
    // we have to assign here to
    if (currentTheme === undefined) {  //fix: check if it's not defiend first
        currentTheme = themes[0];
    }
    currentThemeHeader.textContent = currentTheme.src.split("/").pop();
    currentTheme.play();
}

function stopMainTheme() {
    currentTheme.pause();
}

function palyNextTheme() {
    // ! have to secure getting out of bounds
    if (currentThemeIndex < themes.length - 1) { // bset logic, cuz you will still be incrementing too far when the index is in range but less then the themes length
        currentThemeIndex++;
    } else {
        currentThemeIndex = 0;
    }
    
    // Check if the audio is playing
    // stopMainTheme();
    currentTheme = themes[currentThemeIndex];
    console.log(currentThemeIndex);
    console.log(currentTheme);
    playMainTheme();
}

console.log(currentTheme);

// ! there are two methods, use arrow buttons to browse, or a select input
