import { getRandomQuotes } from './functions/apiQuote';
import { refs } from './refs';
import { renderQuotes } from './functions/renderQuotes';
import { getItemLocal, setItemLocal } from './functions/localStorage';
import { initializeSwiper } from './functions/swiper';


const DATE_KEY = 'cur-date';
const QUOTES_KEY = 'quotes';
const today = new Date().getDate();

const getDate = () => {
    let curdate = JSON.parse(getItemLocal(DATE_KEY));

    if (curdate && curdate === today) {
        return true;
    } else if (!curdate) {
        curdate = today;
        setItemLocal(DATE_KEY, curdate);
        return false;
    } else if (curdate && curdate !== today) {
        setItemLocal(DATE_KEY, today);
        curdate = today;
        return false;
    }
}

const setQuotesLocalStorage = async () => {
    const areQuotesLoaded = getDate();
    let quotes;
    if (areQuotesLoaded) {
        quotes = JSON.parse(getItemLocal(QUOTES_KEY));
    } else {
        setItemLocal(DATE_KEY, new Date().getDate());
        quotes = await getRandomQuotes();
        setItemLocal(QUOTES_KEY, JSON.stringify(quotes));
    }
    return quotes;
}

const checkQuotesLength = async () => {
    const quotes = await setQuotesLocalStorage();
    const shortOnes =  quotes.filter(({quote}) => 
        quote.length < 120
    )
    return shortOnes;
}

const insertQuotes =  async () => {
    const quotes = await checkQuotesLength();
    refs.swiperWrapper.innerHTML = renderQuotes(quotes);
    initializeSwiper();
}

if (refs.swiper) {
    window.addEventListener("load", insertQuotes);
}