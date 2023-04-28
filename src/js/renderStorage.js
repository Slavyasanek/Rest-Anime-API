import { getStorageAnime } from "./functions/api";
import { setCurrentLibrary } from "./functions/changeCurrentLink";
import { finishLoad, startLoading } from "./functions/loading";
import { getLikedAnime, getQueueAnime } from "./functions/localStorage";
import { messageNoAnimeInStorage } from "./functions/notify";
import { renderStorageCard } from "./functions/renderCard";
import { refs } from "./refs";

const renderLike = () => {
    startLoading();
    setCurrentLibrary('liked');
    refs.likeBtn.disabled = true;
    refs.queueBtn.disabled = false;

    const message = document.querySelector('.library__message');
    if (message) {
        message.remove();
    }
    refs.storageList.innerHTML = "";
    const likedAnime = getLikedAnime();
    if (likedAnime.length === 0) {
        refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('liked'));
        finishLoad();
        return;
    }
    getStorageAnime(likedAnime)
    .then(d => {
        const amountOfLikedAnime = d.length;
        
        refs.storageList.innerHTML = renderStorageCard(d);
        finishLoad();
    })
}

const renderQueue = () => {
    startLoading();
    setCurrentLibrary('queue');
    refs.likeBtn.disabled = false;
    refs.queueBtn.disabled = true;
    const message = document.querySelector('.library__message');
    if (message) {
        message.remove();
    }
    refs.storageList.innerHTML = "";
    const queuedAnime = getQueueAnime();

    if (queuedAnime.length === 0) {
        refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('queued'));
        finishLoad()
        return;
    }
    getStorageAnime(queuedAnime)
    .then(d => {
        refs.storageList.innerHTML = renderStorageCard(d);
        finishLoad();
    })
    finishLoad();
}

if (refs.storageList) {
    window.addEventListener("load", renderLike);
}

if (refs.likeBtn) {
    refs.likeBtn.addEventListener("click", renderLike)
}

if (refs.queueBtn) {
    refs.queueBtn.addEventListener("click", renderQueue);
}