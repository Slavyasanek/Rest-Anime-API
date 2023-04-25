export const refs = {
    body: document.body,
    header: document.querySelector('.header'),
    searchForm: document.querySelector('.header__search'),
    searchBtn: document.querySelector('.header__search__btn'),
    themeSwitchBtn: document.querySelector('.theme-switcher__circle'),
    themeSwitchTrack: document.querySelector('.theme-switcher__track'),
    headerLinks: document.querySelectorAll('.header__link'),
    animeList: document.querySelector('.anime-list'),
    pagination: document.querySelector('.tui-pagination'),
}


refs.themeSwitchTrack.addEventListener("click", () => {
    refs.themeSwitchBtn.classList.toggle('dark-theme');
    refs.themeSwitchTrack.classList.toggle('dark-theme');
})