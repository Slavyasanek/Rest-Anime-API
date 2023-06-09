const LIKED_ANIME = 'liked';
const QUEUED_ANIME = 'queue';

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
    if (getItemLocal(LIKED_ANIME)) {
        return JSON.parse(getItemLocal(LIKED_ANIME));
    } else {
        return []
    }
}

export const getQueueAnime = () => {
    if (getItemLocal(QUEUED_ANIME)) {
        return JSON.parse(getItemLocal(QUEUED_ANIME));
    } else {
        return [];
    }

}

export const addLikedAnime = (id) => {
    let liked = getLikedAnime();
    if (liked.includes(id)) {
        return;
    }
    liked.push(id);
    setItemLocal(LIKED_ANIME, JSON.stringify(liked));
}

export const removeLikedAnime = (id) => {
    let liked = getLikedAnime();
    if (!liked.includes(id)) {
        return;
    } else {
        liked.splice(liked.indexOf(id), 1);
    }
    setItemLocal(LIKED_ANIME, JSON.stringify(liked));
}

export const addToQueueAnime = (id) => {
    let queue = getQueueAnime();
    if (queue.includes(id)) {
        return;
    }
    queue.push(id);
    setItemLocal(QUEUED_ANIME, JSON.stringify(queue));
}

export const removeQueuedAnime = (id) => {
    let queue = getQueueAnime();
    
    if (!queue.includes(id)) {
        return;
    } else {
        queue.splice(queue.indexOf(id), 1);
    }
    setItemLocal(QUEUED_ANIME, JSON.stringify(queue));
}
