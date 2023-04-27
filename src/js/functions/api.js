import axios from 'axios';

const URL_FOR_UPLOADS = 'https://api.consumet.org/anime/gogoanime/recent-episodes';
const URL_FRO_ANIME_INFO = 'https://api.consumet.org/anime/gogoanime/info';
const URL_FOR_TOP = 'https://api.consumet.org/anime/gogoanime/top-airing';
const URL_FRO_SEARCH = 'https://api.consumet.org/anime/gogoanime';

async function getRecentUploads(pageValue) {
    const params = {
        page: pageValue,
    }
    try {
        const { data } = await axios.get(URL_FOR_UPLOADS, {params});
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

getRecentUploads(373).then(d => console.log(d))

async function getAnimeInfo(id) {
    try {
        const { data } = await axios.get(`${URL_FRO_ANIME_INFO}/${id}`);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}


async function searchAnime(query, number) {
    try {
        const { data } = await axios.get(`${URL_FRO_SEARCH}/${query}?page=${number}`);
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

async function getTopAnime(pageValue) {
    const params = {
        page: pageValue,
    }
    try {
        const { data } = await axios.get(URL_FOR_TOP, {params});
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}
 getTopAnime(48).then(d => console.log(d));
 
export {getRecentUploads, getAnimeInfo, searchAnime, getTopAnime}
