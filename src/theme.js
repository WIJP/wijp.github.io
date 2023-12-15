const THEME_KEY = "theme";
const THEME_LIGHT = "light";
const THEME_DARK = "dark";
let theme = localStorage.getItem(THEME_KEY);
const themeSwitcher = document.querySelector("#switcher");


if(theme == undefined) {
    localStorage.setItem(THEME_KEY, theme = THEME_LIGHT);
}

if(theme == THEME_LIGHT) {
    document.body.classList.add(THEME_DARK);
    const classes = themeSwitcher.querySelector("i").classList;

    classes.remove("fa-moon");
    classes.add("fa-sun");
}

themeSwitcher.addEventListener("click", () => {
    document.body.classList.toggle(THEME_DARK);

    const isDark = document.body.classList.contains(THEME_DARK);
    const classes = themeSwitcher.querySelector("i").classList;

    classes.remove("fa-sun");
    classes.remove("fa-moon");

    classes.add(isDark ? "fa-sun" : "fa-moon");

    localStorage.setItem(THEME_KEY, isDark ? THEME_LIGHT : THEME_DARK);
});