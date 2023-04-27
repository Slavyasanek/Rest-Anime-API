import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {refs} from '../refs';


export const createPaginationForRecentRealese = (totalItems) => {
    const options =  {
        itemsPerPage: totalItems,
        totalItems: 372 * 20 + 4,
        visiblePages: 5, 
    }
    const pagination = new Pagination(refs.pagination, options);
    return pagination;
}

export const createPagination = (totalItems, page) => {
    const options =  {
        itemsPerPage: 20,
        totalItems: totalItems,
        visiblePages: page > 5 ? 5 : page,
    }
    const pagination = new Pagination(refs.pagination, options);
    return pagination;
}