import { getRecentUploads } from "./functions/api";
import { refs } from './refs';
import { createPaginationForRecentRealese } from "./functions/pagination";
import { renderCard } from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";
import { setCurrentLink, setDatasetAnimeList } from "./functions/changeCurrentLink";



const getAnime = async () => {
    setDatasetAnimeList('recent');
    setCurrentLink();
    startLoading();
    const { results } = await getRecentUploads(1);
    const posts = renderCard(results);
    refs.pagination.innerHTML = "";
    refs.animeList.innerHTML = posts;
    finishLoad();

    const pagination = createPaginationForRecentRealese(results.length);
    pagination.on('beforeMove', ({ page }) => {
        refs.animeList.innerHTML = "";
        startLoading();
        getRecentUploads(page).then(({ results }) => {
            const posts = renderCard(results);
            refs.animeList.insertAdjacentHTML("beforeend", posts);
            finishLoad();
        })
    })
}


refs.recentBtn.addEventListener("click", getAnime);