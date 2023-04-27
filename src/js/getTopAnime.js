import { refs } from './refs';
import { renderTopCard } from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";
import { getTopAnime } from './functions/api';
import { createPagination } from './functions/pagination';

const outputTopAnime = async (event) => {

    // startLoading();
    let page = 1;
    const results = await getTopAnime(page);
    let cards = renderTopCard(results.results);
    refs.animeList.innerHTML = cards;
    let totalItems = results.results.length;
    let curLength = results.results.length;
    while (curLength > 0) {
        page += 1;
        const nextResults = await getTopAnime(page);
        curLength = nextResults.results.length;
        totalItems += nextResults.results.length;
    }
    const pagination = createPagination(totalItems, page);
    pagination.on('beforeMove', ({ page }) => {
        refs.animeList.innerHTML = "";
        getTopAnime(page)
            .then(d => {
                const posts = renderTopCard(d.results);
                refs.animeList.innerHTML = posts;
            })
    })
    // finishLoad();
}


refs.popularBtn.addEventListener("click", () => {
    startLoading();
    outputTopAnime();
    finishLoad();
});
window.addEventListener("load", outputTopAnime)