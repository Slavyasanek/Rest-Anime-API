import { startLoading, finishLoad } from './loading';
import { renderStorageCard } from './renderCard';
import { createPagination } from './pagination';
import { refs } from '../refs';

export const createLibraryPagination = (data, amount) => {
    const pagination = createPagination(10, amount, Math.ceil(amount/10))
    pagination.on("beforeMove", ({page}) => {
        startLoading();
            refs.storageList.innerHTML = renderStorageCard(data.slice(page * 10 - 10, page * 10));
        finishLoad();
    })
}