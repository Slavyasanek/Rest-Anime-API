export const refs = {
    body: document.body,
    header: document.querySelector('.header'),
    searchForm: document.querySelector('.header__search'),
    searchBtn: document.querySelector('.header__search__btn'),
    themeSwitchBtn: document.querySelector('.theme-switcher__circle'),
    themeSwitchTrack: document.querySelector('.theme-switcher__track'),
    darkThemeIcon: document.querySelector('[data-switch="dark-theme"]'),
    lightThemeIcon: document.querySelector('[data-switch="light-theme"]'),

    popularBtn: document.querySelector('[data-link="popular"]'),
    recentBtn: document.querySelector('[data-link="recent-uploads"]'),

    animeList: document.querySelector('.anime-list'),
    pagination: document.querySelector('.tui-pagination'),
    popup: document.querySelector('.popup'),
    popupCloseBtn: document.querySelector('[data-popup-close]'),
    popupContent: document.querySelector('.popup__content'),
    modal: document.querySelector('.modal__body')
}
