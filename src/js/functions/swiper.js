import Swiper, {Autoplay } from 'swiper';

export const initializeSwiper = () => {
    const slider = new Swiper('.swiper', {
        modules: [Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: false,
        },
        speed: 3000,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
        }
    })
}