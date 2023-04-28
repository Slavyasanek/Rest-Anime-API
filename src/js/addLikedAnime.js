import { addLikedAnime } from './functions/localStorage';
import { refs } from './refs';



export const likeAnime = (event) => {
    if (event.target.nodeName !== 'SPAN' && event.target.nodeName !== 'BUTTON') {
        return;
    }
    const currentId = event.target.closest('li').id || event.target.dataset.like;
    addLikedAnime(currentId);
}

if (refs.animeList) {
    refs.animeList.addEventListener("click", likeAnime)
}

