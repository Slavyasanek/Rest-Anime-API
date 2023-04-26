import Notiflix from "notiflix";

const startLoading = () => {
    Notiflix.Loading.dots({
        svgColor: 'rgba(0, 29, 219, 0.5)',
    })
}

const finishLoad = () => {
    Notiflix.Loading.remove();
}

export {startLoading, finishLoad}