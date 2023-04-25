import { getRecentUploads } from "./api";
import { refs } from './refs';
import { createPaginationForRecentRealese } from "./pagination";
import renderCard from './renderCard';



const getAnime = () => {
    getRecentUploads(1)
        .then(({ results }) => {
            const posts = renderCard(results);
            refs.animeList.insertAdjacentHTML("beforeend", posts)
            const pagination = createPaginationForRecentRealese(results.length);
            pagination.on('beforeMove', ({ page }) => {
                refs.animeList.innerHTML = "";
                getRecentUploads(page).then(({ results }) => {
                    const posts = renderCard(results);
                    refs.animeList.insertAdjacentHTML("beforeend", posts)

                })
            })
        })

}


getAnime();