import { finishLoad, startLoading } from "./functions/loading";
import { getLikedAnime, getQueueAnime, removeLikedAnime, removeQueuedAnime } from "./functions/localStorage";
import { refs } from "./refs";
import { messageNoAnimeInStorage } from "./functions/notify";
import { createLibraryPagination } from "./functions/renderPagination";
import { getStorageAnime } from "./functions/apiAnime";
import { renderStorageCard } from "./functions/renderCard";
import { storagePaginationHolder } from "./renderStorage";


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

const removeAnimeFromStorage = async (event) => {
    const curId = event.target.dataset.delete;
    let currentAnimeInStorage;

    if (refs.storageList.dataset.contain === 'liked') {
        removeLikedAnime(curId);
        currentAnimeInStorage = getLikedAnime();
    } else {
        removeQueuedAnime(curId);
        currentAnimeInStorage = getQueueAnime();
    }

    const storageListElements = refs.storageList.childNodes;
    storageListElements.forEach(elem => {
        if (elem.id === curId) {
            elem.remove();
        }
    })
    if (currentAnimeInStorage.length === 0) {
        if (refs.storageList.dataset.contain === 'liked') {
            refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('liked'));
        } else {
            refs.storageList.insertAdjacentHTML("afterend", messageNoAnimeInStorage('queued'));
        }
        closeDislikeAccept();
        return;
    }

    const currentPage = storagePaginationHolder.getCurrentPage();

    const gotAnime = await getStorageAnime(currentAnimeInStorage);
    const pagination = createLibraryPagination(gotAnime, currentAnimeInStorage.length);
    if (storageListElements.length === 0) {
        pagination.movePageTo(Math.ceil(currentAnimeInStorage.length / 10))
    } else {
        pagination.movePageTo(currentPage);
        const addAnimeOnCurrentPage = gotAnime.slice(currentPage * 10 - 10 + 9, currentPage * 10);
        refs.storageList.insertAdjacentHTML("beforeend", renderStorageCard(addAnimeOnCurrentPage));
    }

    // refs.storageList.innerHTML = renderStorageCard(gotAnime.slice(currentPage * 10 - 10, currentPage * 10));
    // pagination.movePageTo(currentPage);

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
