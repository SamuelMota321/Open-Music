const buttonTheme = document.querySelector(".header__theme-button");
const html = document.querySelector("html");
const img = document.querySelector(".header__theme-button > img");

const localStorageKey = "@openMusic";

let darkMode = JSON.parse(localStorage.getItem(localStorageKey)) || false;

function themeChanging() {
    darkMode = !darkMode;
    html.classList.toggle("darkmode", darkMode);
    localStorage.setItem(localStorageKey, JSON.stringify(darkMode));
    img.src = darkMode ? './src/assets/icons/sun-icon.svg' : './src/assets/icons/moon.svg';
    
}

buttonTheme.addEventListener("click", themeChanging);

export default function themeAnalysis() {
    darkMode = JSON.parse(localStorage.getItem(localStorageKey)) || false;

    html.classList.toggle("darkmode", darkMode);
    img.src = darkMode ? './src/assets/icons/sun-icon.svg' : './src/assets/icons/moon.svg';

}
