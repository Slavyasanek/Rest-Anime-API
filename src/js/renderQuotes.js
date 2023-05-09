import Swiper, { Navigation } from 'swiper';

const slider = new Swiper('.swiper', {
    modules: [Navigation],
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})