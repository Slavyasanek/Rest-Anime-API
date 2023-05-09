export const renderQuotes = (data) => {
    const quotes = data.map(({anime, character, quote}) => {
        return `<div class="swiper-slide">
        <blockquote class="swiper__quote">
          <h3 class="swiper__speech">
            ${quote}
          </h3>
          <cite class="swiper__cite"> <span class="swiper__feature">Character:</span> ${character}</cite>
          <cite class="swiper__cite"> <span class="swiper__feature">Anime:</span> ${anime}</cite>
        </blockquote>
      </div>`
    }).join("");
    return quotes;
}