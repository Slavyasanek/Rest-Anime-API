import { refs } from './refs';
import { createPagination } from "./functions/pagination";
import { renderSearchCard } from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";
import { searchAnime } from './functions/apiAnime';
import { infoNoResults } from './functions/notify';
import { setCurrentLink, setDatasetAnimeList } from './functions/changeCurrentLink';

const outputSearchResults = async (event) => {
    event.preventDefault();
    let page = 1;
    const query = refs.searchForm.searchBox.value;
    if (query === "") {
        return;
    }
    setDatasetAnimeList('');
    setCurrentLink();
    startLoading();
    const results = await searchAnime(query, page);
    if (results.results.length === 0) {
        finishLoad();
        infoNoResults();
        return;
    }
    const posts = renderSearchCard(results.results);
    refs.animeList.innerHTML = posts;

    let totalItems = results.results.length;
    let hasNextPage = results.hasNextPage;
    while (hasNextPage === true) {
        page += 1;
        const nextResults = await searchAnime(query, page);
        totalItems += nextResults.results.length;
        hasNextPage = nextResults.hasNextPage;
    }
    finishLoad();
    const pagination = createPagination(totalItems > 20 ? 20 : totalItems, totalItems, page);
    pagination.on('beforeMove', ({ page }) => {
        refs.animeList.innerHTML = "";
        searchAnime(query, page).then(d => {
            const posts = renderSearchCard(d.results);
            refs.animeList.innerHTML = posts;
        })
    })
}

if (refs.searchForm) {
    refs.searchForm.addEventListener('submit', outputSearchResults);
}
