import { getLikedAnime } from "./localStorage";

const renderCard = (data) => {
    const posts = data.map(({title, image, id, episodeNumber}) => {
        const isAnimeLiked = getLikedAnime().includes(id);
        return `<li class="card" id="${id}">
        <div class="card__thumb">
            <img src="${image}" alt="${title}" class="card__img">
            <p class="card__episode">NEW <span class="card__episode-num">${episodeNumber}</span> EPISODE</p>
            <div class="add-like">
                <span class="icon-like ${isAnimeLiked ? 'is-liked' : ''} ">${isAnimeLiked ? '&#x292C;' : '&#x2764 '}</span>
            </div>
        </div>
        <h3 class="card__title">${title.replaceAll('"', '')}</h3>
        </li>`
    }
    ).join("");
    return posts;
}

const renderSearchCard = (data) => {
    const posts = data.map(({title, image, id, releaseDate}) => {
        const isAnimeLiked = getLikedAnime().includes(id);
        return `<li class="card" id="${id}">
        <div class="card__thumb">
            <img src="${image}" alt="${title}" class="card__img">
            <p class="card__episode"><span class="card__episode-num">${releaseDate ? releaseDate.replace("Released: ", "") : `Unknown`}</span> YEAR</p>
            <div class="add-like">
                <span class="icon-like ${isAnimeLiked ? 'is-liked' : ''}" > ${isAnimeLiked ? '&#x292C;' : '&#x2764 '}</span>
            </div>
        </div>
        <h3 class="card__title">${title.replaceAll('"', '')}</h3>
        </li>`
    }
).join("");
return posts;
}

const renderTopCard = (data) => {
    const posts = data.map(({title, image, id, genres}) => {
        const isAnimeLiked = getLikedAnime().includes(id);
        return `<li class="card" id="${id}">
        <div class="card__thumb">
            <img src="${image}" alt="${title}" class="card__img">
            <p class="card__episode"><span class="card__episode-num">${genres.join(', ')}</span></p>
            <div class="add-like">
                <span class="icon-like ${isAnimeLiked ? 'is-liked' : ''} " > ${isAnimeLiked ? '&#x292C;' : '&#x2764 '}</span>
            </div>
        </div>
        <h3 class="card__title">${title.replaceAll('"', '')}</h3>
        </li>`
    }
).join("");
return posts;
}

export {renderCard, renderSearchCard, renderTopCard}