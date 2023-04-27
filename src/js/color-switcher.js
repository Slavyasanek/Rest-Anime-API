import { refs } from "./refs";
import { getItemLocal, setItemLocal } from "./functions/localStorage";

const CURRENT_THEME_KEY = 'current_theme';

refs.themeSwitchTrack.addEventListener("click", () => {
    refs.themeSwitchBtn.classList.toggle('dark-theme');
    refs.themeSwitchTrack.classList.toggle('dark-theme');
    if (refs.themeSwitchBtn.classList.contains('dark-theme')) {
        refs.darkThemeIcon.classList.add('chosen');
        refs.lightThemeIcon.classList.remove('chosen');
        setItemLocal(CURRENT_THEME_KEY, 'dark');
    } else {
        refs.darkThemeIcon.classList.remove('chosen');
        refs.lightThemeIcon.classList.add('chosen');
        setItemLocal(CURRENT_THEME_KEY, 'light');
    }
})

const setDarkTheme = () => {
    refs.body.classList.remove('light-theme');
    refs.body.classList.add('dark-theme');

    refs.header.classList.remove('light-theme');
    refs.header.classList.add('dark-theme');

    refs.searchForm.classList.remove('light-theme');
    refs.searchForm.classList.add('dark-theme');

    refs.searchBtn.classList.remove('light-theme');
    refs.searchBtn.classList.add('dark-theme');

    refs.modal.classList.remove('light-theme');
    refs.modal.classList.add('dark-theme');

    refs.popupCloseBtn.classList.remove('light-theme');
    refs.popupCloseBtn.classList.add('dark-theme');
}

const setLightTheme = () => {
    refs.body.classList.remove('dark-theme');
    refs.body.classList.add('light-theme');

    refs.header.classList.remove('dark-theme');
    refs.header.classList.add('light-theme');

    refs.searchForm.classList.remove('dark-theme');
    refs.searchForm.classList.add('light-theme');

    refs.searchBtn.classList.remove('dark-theme');
    refs.searchBtn.classList.add('light-theme');

    refs.modal.classList.remove('dark-theme');
    refs.modal.classList.add('light-theme');

    refs.popupCloseBtn.classList.remove('dark-theme');
    refs.popupCloseBtn.classList.add('light-theme');
}

const setThemeOnLoad = () => {
    const curHours = new Date().getHours();
    console.log(`current hour is ${curHours}`)
    if (curHours > 18) {
        setItemLocal(CURRENT_THEME_KEY, 'dark')
        setDarkTheme();
    } else {
        setItemLocal(CURRENT_THEME_KEY, 'light')
        setLightTheme()
    }
}

window.addEventListener("load", setThemeOnLoad)