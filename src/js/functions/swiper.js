import Swiper, { Navigation, Autoplay } from 'swiper';

export const initializeSwiper = () => {
    const slider = new Swiper('.swiper', {
        modules: [Navigation, Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        speed: 3000,
        autoplay: {
            delay: 2000,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        }
    })
}