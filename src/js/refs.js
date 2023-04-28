export const refs = {
    body: document.body,
    header: document.querySelector('.header'),
    footer: document.querySelector('.footer'),
    searchForm: document.querySelector('.header__search'),
    searchBtn: document.querySelector('.header__search__btn'),
    themeSwitchBtn: document.querySelector('.theme-switcher__circle'),
    themeSwitchTrack: document.querySelector('.theme-switcher__track'),
    darkThemeIcon: document.querySelector('[data-switch="dark-theme"]'),
    lightThemeIcon: document.querySelector('[data-switch="light-theme"]'),

    popularBtn: document.querySelector('[data-link="popular"]'),
    recentBtn: document.querySelector('[data-link="recent-uploads"]'),
    likeBtn: document.querySelector('[data-library="liked"]'),
    queueBtn: document.querySelector('[data-library="queue"]'),

    animeList: document.querySelector('.js-anime'),
    storageList: document.querySelector('.js-storage'),

    pagination: document.querySelector('.tui-pagination'),

    popup: document.querySelector('.popup'),
    popupCloseBtn: document.querySelector('[data-popup-close]'),
    popupCloseIcon: document.querySelector('.modal__close-icon'),
    popupContent: document.querySelector('.popup__content'),
    modal: document.querySelector('.modal__body'),

    accept: document.querySelector('.accept'),
    acceptBody: document.querySelector('.accept__body'),
    acceptCloseBtn: document.querySelector('[accept-popup-close]'),
    acceptCloseIcon: document.querySelector('.accept__close-icon'),
    acceptQuestion: document.querySelector('.accept__question'),
    acceptDelete: document.querySelector('[data-delete]'),
    acceptReject: document.querySelector('[data-reject]')
}
