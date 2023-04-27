import { getRecentUploads } from "./functions/api";
import { refs } from './refs';
import { createPaginationForRecentRealese } from "./functions/pagination";
import {renderCard} from './functions/renderCard';
import { finishLoad, startLoading } from "./functions/loading";



const getAnime = () => {
    getRecentUploads(1)
        .then(({ results }) => {
            const posts = renderCard(results);
            refs.animeList.insertAdjacentHTML("beforeend", posts)
            const pagination = createPaginationForRecentRealese(results.length);
            pagination.on('beforeMove', ({ page }) => {
                refs.animeList.innerHTML = "";
                startLoading()
                getRecentUploads(page).then(({ results }) => {
                    const posts = renderCard(results);
                    refs.animeList.insertAdjacentHTML("beforeend", posts);
                    finishLoad()
                })
            })
        }).catch(e => {
            console.log(e);
        })

}


refs.recentBtn.addEventListener("click", getAnime);