import axios from "axios"

const URL_FOR_QUOTES =  'https://animechan.vercel.app/api/quotes';

const getRandomQuotes = async () => {
    try {
        const {data} = await axios.get(URL_FOR_QUOTES);
        return data;
    } catch (e) {
        throw new Error(err.message);
    }
}

// getRandomQuotes().then(r => console.log(r))