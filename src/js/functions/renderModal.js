const renderModal = ({ id, image, releaseDate, title, totalEpisodes, status, type, genres, description, otherName, episodes, subOrDub }) => {
  const episodeList = episodes.map(episode =>
    `<a href="${episode.url}" target="_blank" rel="noreferrer noopener" class="modal__episode">EP<span class="modal__episode-title">${episode.number}</span></a>
    `
  ).join("");
  return `<div class="modal__holder">
    <img
    src="${image}"
    alt="${title}"
    class="modal__img"
  />
  <div class="modal__details">
    <h1 class="modal__title">${title.replaceAll('"', '')}</h1>
    <ul class="modal__details">
      <li class="modal__item">Date: <span class="modal__info">${releaseDate}</span></li>
      <li class="modal__item">Status: <span class="modal__info">${status}</span></li>
      <li class="modal__item">Episodes: <span class="modal__info">${totalEpisodes}</span></li>
      <li class="modal__item">Type: <span class="modal__info">${type}</span></li>
      <li class="modal__item">Genres: <span class="modal__info">${genres.join(", ")}</span></li>
      <li class="modal__item">Other names: <span class="modal__info">${otherName}</span></li>
    </ul>
  </div>
    </div>
  <div class="modal__btns">
    <button class="btn--red modal__btn" data-like="${id}">&#x2764</button>
    <button class="btn--blue modal__btn" data-queue="${id}">Add to queue</button>
  </div>
  <p class="modal__descr">${description}</p>
  <h2 class="modal__suggestion">Watch ${subOrDub === 'dub' ? 'dubbed' : 'subbed'} anime on 
  <a href="https://gogoanime.cl/" target="_blank" rel="noopener noreferrer" class="modal__link">GoGoAnime.cl</a></h2>
  <div class="modal__episodes">${episodeList ? episodeList : 'There are no episodes yet. '}</div>`
}

export default renderModal;