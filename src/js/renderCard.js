const renderCard = (data) => {
    const posts = data.map(({title, image, id, episodeNumber}) => 
        `<li class="card" id="${id}">
        <div class="card__thumb">
            <img src="${image}" alt="${title}" class="card__img">
            <p class="card__episode">NEW <span class="card__episode-num">${episodeNumber}</span> EPISODE</p>
        </div>
        <h3 class="card__title">${title}</h3>
        </li>`
    ).join("");
    return posts;
}

export default renderCard;