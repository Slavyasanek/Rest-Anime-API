import Pagination from 'tui-pagination';
import { refs } from '../refs';


export const createPaginationForRecentRealese = (totalItems) => {
    if (refs.miniLoader) {
        refs.pagination.style.display = 'none';
        refs.miniLoader.style.display = 'flex';
    }
    const options = {
        itemsPerPage: totalItems,
        totalItems: 372 * 20 + 4,
        visiblePages: 5,
        centerAlign: true,
    }
    const pagination = new Pagination(refs.pagination, options);
    refs.pagination.style.display = 'block';
    refs.miniLoader.style.display = 'none';
    return pagination;
}

export const createPagination = (itemsPerPage, totalItems, page) => {
    if (refs.miniLoader) {
        refs.pagination.style.display = 'none';
        refs.miniLoader.style.display = 'flex';
    }
    const options = {
        itemsPerPage: itemsPerPage,
        totalItems: totalItems,
        visiblePages: page > 5 ? 5 : page,
        centerAlign: true,
    }
    const pagination = new Pagination(refs.pagination, options);
    if (page > 1) {
        refs.pagination.style.display = 'block';
    } else {
        refs.pagination.style.display = 'none';
    }
    if (refs.miniLoader) {
        refs.miniLoader.style.display = 'none';
    }
    return pagination;
}

