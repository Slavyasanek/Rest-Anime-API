import { getRandomQuotes } from './functions/apiQuote';
import { refs } from './refs';
import { renderQuotes } from './functions/renderQuotes';
import { getItemLocal, setItemLocal } from './functions/localStorage';
import { initializeSwiper } from './functions/swiper';


const DATE_KEY = 'cur-date';
const QUOTES_KEY = 'quotes';

const getDate = () => {
    let curdate;
    if (getItemLocal(DATE_KEY)) {
        curdate = getItemLocal(DATE_KEY);
    } else {
        curdate = new Date().getDate();
        setItemLocal(DATE_KEY, curdate);
    }
    return curdate;
}


const setQuotesLocalStorage = async () => {
    let quotes;
    if (getDate() === getItemLocal(DATE_KEY)) {
        quotes = JSON.parse(getItemLocal(QUOTES_KEY));
    } else {
        setItemLocal(DATE_KEY, new Date().getDate());
        quotes = await getRandomQuotes();
        setItemLocal(QUOTES_KEY, JSON.stringify(quotes));
    }
    return quotes;
}



// setQuotesLocalStorage()

const insertQuotes =  async () => {
    const quotes = await setQuotesLocalStorage();

    refs.swiperWrapper.innerHTML = renderQuotes(quotes);

    initializeSwiper();
}

if (refs.swiper) {
    window.addEventListener("load", insertQuotes);
}