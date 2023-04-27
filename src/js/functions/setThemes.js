import { refs } from "../refs";

const setDarkTheme = () => {
    refs.themeSwitchBtn.classList.add('dark-theme');
    refs.themeSwitchTrack.classList.add('dark-theme');

    refs.darkThemeIcon.classList.add('chosen');
    refs.lightThemeIcon.classList.remove('chosen');

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
    refs.themeSwitchBtn.classList.remove('dark-theme');
    refs.themeSwitchTrack.classList.remove('dark-theme');

    refs.darkThemeIcon.classList.remove('chosen');
    refs.lightThemeIcon.classList.add('chosen');

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

export {setDarkTheme, setLightTheme};