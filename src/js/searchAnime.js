import { refs } from './refs';
import { createPagination } from "./functions/pagination";
import { renderSearchCard } from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";
import { searchAnime } from './functions/api';

const outputSearchResults = async (event) => {
    event.preventDefault();
    let page = 1;
    const query = refs.searchForm.searchBox.value;
    const results = await searchAnime(query, page);
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
    if (totalItems > 20) {
        const pagination = createPagination(totalItems, page);
        pagination.on('beforeMove', ({page}) => {
            refs.animeList.innerHTML = "";
            searchAnime(query, page).then(d => {
                const posts = renderSearchCard(d.results);
                refs.animeList.innerHTML = posts;
            })

        })
    } else {
        refs.pagination.innerHTML = "";
    }
}

refs.searchForm.addEventListener('submit', outputSearchResults);