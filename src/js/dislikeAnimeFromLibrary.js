import { finishLoad, startLoading } from "./functions/loading";
import { removeLikedAnime, removeQueuedAnime } from "./functions/localStorage";
import { refs } from "./refs";
import { messageNoAnimeInStorage } from "./functions/notify";

const openAccept = (event) => {
    if (event.target.nodeName !== 'SPAN' || !event.target.classList.contains('icon-like')) {
        return;
    }
    const currentAnime = event.target.closest('li').dataset.title;
    const currentId = event.target.closest('li').id;
    refs.acceptQuestion.innerHTML = `Are you sure you want to delete ${currentAnime} from your ${refs.storageList.dataset.contain}?`;
    startLoading();
    refs.body.classList.add('lock');
    refs.accept.classList.add('open');
    refs.acceptDelete.dataset.delete = currentId;
    finishLoad();
}

const closeDislikeAccept = () => {
    refs.body.classList.remove('lock');
    refs.accept.classList.remove('open');
    refs.acceptQuestion.innerHTML = "";
    refs.acceptDelete.dataset.delete = "";
}

const removeAnimeFromStorage = (event) => {
    const curId = event.target.dataset.delete;
    if (refs.storageList.dataset.contain === 'liked') {
        removeLikedAnime(curId);
    } else {
        removeQueuedAnime(curId)
    }
    const storageListElements = refs.storageList.childNodes;
    storageListElements.forEach(elem => {
        if (elem.id === curId) {
            elem.remove()
        }
    })
    if (storageListElements.length === 0) {
        if (refs.storageList.dataset.contain === 'liked') {
            refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('liked'));
        } else {
            refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('queued'));
        }
    }
    closeDislikeAccept();
}

if (refs.acceptDelete) {
    refs.acceptDelete.addEventListener("click", removeAnimeFromStorage);
}

if (refs.acceptCloseBtn) {
    refs.acceptCloseBtn.addEventListener("click", closeDislikeAccept);
}

if (refs.acceptReject) {
    refs.acceptReject.addEventListener("click", closeDislikeAccept);
}

if (refs.storageList) {
    refs.storageList.addEventListener("click", openAccept);
}
