import { refs } from './refs';
import { renderTopCard } from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";
import { getTopAnime } from './functions/apiAnime';
import { createPagination } from './functions/pagination';
import { setCurrentLink, setDatasetAnimeList } from './functions/changeCurrentLink';

const outputTopAnime = async () => {
    setDatasetAnimeList('top');
    setCurrentLink();
    startLoading();
    let page = 1;
    const results = await getTopAnime(page);
    let cards = renderTopCard(results.results);
    refs.animeList.innerHTML = cards;
    finishLoad();
    let totalItems = results.results.length;
    let curLength = results.results.length;
    while (curLength > 0) {
        page += 1;
        const nextResults = await getTopAnime(page);
        curLength = nextResults.results.length;
        totalItems += nextResults.results.length;
    }
    const pagination = createPagination(10, totalItems, page);
    pagination.on('beforeMove', ({ page }) => {
        refs.animeList.innerHTML = "";
        startLoading();
        getTopAnime(page)
            .then(d => {
                const posts = renderTopCard(d.results);
                refs.animeList.innerHTML = posts;
            }).finally(finishLoad())
    })
}

if (refs.popularBtn) {
    refs.popularBtn.addEventListener("click", () => {
        outputTopAnime();
    });

}

if (refs.animeList) {
    window.addEventListener("load", outputTopAnime)
}