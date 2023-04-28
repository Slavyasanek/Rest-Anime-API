import { addLikedAnime, addToQueueAnime, removeLikedAnime, removeQueuedAnime } from './functions/localStorage';
import { refs } from './refs';

export const likeAnime = (event) => {
    if (event.target.nodeName !== 'SPAN' && event.target.nodeName !== 'BUTTON') {
        return;
    }
    let currentId;
    if (event.target.nodeName === 'SPAN') {
        currentId = event.target.closest('li').id
    } else {
        currentId =  event.target.dataset.like;
    }
    if (event.target.classList.contains('is-liked')) {
        removeLikedAnime(currentId);
        event.target.innerHTML = '&#x2764';
        event.target.classList.remove('is-liked');
        return;
    } else {
        addLikedAnime(currentId);
        event.target.innerHTML = '&#x292C';
        event.target.classList.add('is-liked');
    }

}

if (refs.animeList) {
    refs.animeList.addEventListener("click", likeAnime);
}

export const queueAnime = (event) => {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    const currentId = event.target.dataset.queue;
    if (event.target.classList.contains('is-liked')) {
        removeQueuedAnime(currentId);
        event.target.innerHTML = 'Add to queue';
        event.target.classList.remove('is-liked')
    } else {
        addToQueueAnime(currentId);
        event.target.innerHTML = 'Already in queue';
        event.target.classList.add('is-liked');
    }
}