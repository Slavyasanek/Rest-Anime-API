import { getRecentUploads } from "./api";
import {refs} from './refs';
import { createPaginationForRecentRealese } from "./pagination";
const animeInsert = document.querySelector('.anime-list');

const getAnime = () => {
    getRecentUploads(1)
        .then(({ results }) => {
            const posts = results.map(({ title, image }) =>
                `<li>
            <p>${title}</p>
            <img src="${image}" width="100">
            </li>`
            ).join("");
            animeInsert.insertAdjacentHTML("beforeend", posts)
            const pagination = createPaginationForRecentRealese(results.length);
            pagination.on('beforeMove', ({page}) => {
                refs.animeList.innerHTML = "";
                getRecentUploads(page).then(({results}) => {
                    const posts = results.map(({ title, image }) =>
                    `<li>
                <p>${title}</p>
                <img src="${image}" width="100">
                </li>`
                ).join("");
                animeInsert.insertAdjacentHTML("beforeend", posts)
    
                })
            })
        })

}


getAnime();