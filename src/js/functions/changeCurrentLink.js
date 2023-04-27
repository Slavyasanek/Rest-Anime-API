import { refs } from "../refs";

export const setDatasetAnimeList = (value) => {
    return     refs.animeList.dataset.contain = value;
}

export const setCurrentLink = () => {
    if (refs.animeList.dataset.contain === 'top') {
        refs.recentBtn.classList.remove('current');
        refs.popularBtn.classList.add('current');
    } else if (refs.animeList.dataset.contain === 'recent') {
        refs.popularBtn.classList.remove('current');
        refs.recentBtn.classList.add('current');
    } else {
        refs.popularBtn.classList.remove('current');
        refs.recentBtn.classList.remove('current');
    }
}
