import { refs } from "./refs";
import { getItemLocal, setItemLocal } from "./functions/localStorage";
import { setLightTheme, setDarkTheme } from "./functions/setThemes";

const CURRENT_THEME_KEY = 'current_theme';

const setThemeBtnClick = () => {
    const curTheme = getItemLocal(CURRENT_THEME_KEY);
    if (curTheme === 'light') {
        setDarkTheme();
        setItemLocal(CURRENT_THEME_KEY, 'dark')
    } else {
        setLightTheme();
        setItemLocal(CURRENT_THEME_KEY, 'light');
    }
}

refs.themeSwitchTrack.addEventListener("click", setThemeBtnClick)

const setThemeOnLoad = () => {
    const curTheme = getItemLocal(CURRENT_THEME_KEY);

    if (curTheme === 'dark') {
        setItemLocal(CURRENT_THEME_KEY, 'dark')
        setDarkTheme();
    } else {
        setItemLocal(CURRENT_THEME_KEY, 'light')
        setLightTheme()
    }
}

window.addEventListener("load", setThemeOnLoad)