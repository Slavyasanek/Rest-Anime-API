import { refs } from "../refs";

const renderModal = ({image, releaseDate, title, totalEpisodes, status, type, genres}) => {
    return `      <img
    src="${image}"
    alt="${title}"
    class="modal__img"
  />
  <div class="modal__details">
    <h1 class="modal__title">${title}y</h1>
    <ul class="modal__details">
      <li class="modal__item">Date: <span class="modal__info">${releaseDate}</span></li>
      <li class="modal__item">Status: <span class="modal__info">${status}</span></li>
      <li class="modal__item">Episodes: <span class="modal__info">${totalEpisodes}</span></li>
      <li class="modal__item">Type: <span class="modal__info">${type}</span></li>
      <li class="modal__item">Genres: <span class="modal__info">${genres.join(", ")}</span></li>
    </ul>
  </div>
  <div class="modal__btns">
    <button class="modal__btn">Like</button>
    <button class="modal__btn">Add to queque</button>
  </div>`
}

export default renderModal;