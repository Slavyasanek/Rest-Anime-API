const LIKED_ANIME = 'liked';

export const getItemLocal = (key) => {
    return localStorage.getItem(key);
}
export const setItemLocal = (key, value) => {
    return localStorage.setItem(key, value);
}

export const removeItemLocal = (key) => {
    return localStorage.removeItem(key);
}


export const getLikedAnime = () => {
    return JSON.parse(getItemLocal(LIKED_ANIME));
}

export const addLikedAnime = (id) => {
    let liked = [];
    if (getLikedAnime() !== null) {
        liked = getLikedAnime();
    }
    if (liked.includes(id)) {
        return;
    }
    liked.push(id);
    setItemLocal(LIKED_ANIME, JSON.stringify(liked));
    console.log(`working`)
}


