import axios from "axios"

const URL_FOR_QUOTES =  'https://animechan.vercel.app/api/quotes';

export const getRandomQuotes = async () => {
    try {
        const {data} = await axios.get(URL_FOR_QUOTES);
        return data;
    } catch (err) {
        console.log(err)
        throw new Error(err.message);
    }
}

//getRandomQuotes().then(r => console.log(r))