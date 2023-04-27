import { refs } from "./refs";
import { startLoading, finishLoad } from "./functions/loading";
import renderModal from "./functions/renderModal";
import { getAnimeInfo } from "./functions/api";
import { loadFullPoster } from "./functions/createBasiclightbox";

function popupOpen(event) {
    startLoading();
    refs.body.classList.add('lock');
    refs.popup.classList.add('open');
    const currentAnime = event.target.closest('li').id;
    getAnimeInfo(currentAnime)
    .then(d => {
            console.log(d);
            const popupContent = renderModal(d);
            refs.popupContent.insertAdjacentHTML("beforeend", popupContent);
            finishLoad();

            const curPoster = document.querySelector('.modal__img');
            curPoster.addEventListener("click", loadFullPoster);
    });
    refs.popup.addEventListener("click", backdropClose);
    window.addEventListener("keydown", escClose);
}

function popupClose() {
    refs.body.classList.remove('lock');
    refs.popup.classList.remove('open');
    refs.popupContent.innerHTML = "";
    
    refs.popup.removeEventListener("click", backdropClose);
    window.removeEventListener("keydown", escClose);
}

function escClose(event) {
    if (event.code !== "Escape") {
        return;
    } else {
        popupClose();
    }
}

function backdropClose(event) {
    if (event.currentTarget === event.target) {
        popupClose();
    }
}

refs.animeList.addEventListener("click", popupOpen);
refs.popupCloseBtn.addEventListener("click", popupClose);
