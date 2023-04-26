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