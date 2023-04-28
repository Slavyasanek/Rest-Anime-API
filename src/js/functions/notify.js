import Notiflix from 'notiflix';

Notiflix.Notify.init({
    info: {
        background: 'rgb(114, 137, 218)',
    },
})

export const infoNoResults = () => {
    return Notiflix.Notify.info(`No results`, {
        timeout: 3000,
        width: '200px',
        borderRadius: '0px',
        fontFamily: 'Josefin Sans',
        fontSize: '18px',
    })
}

export const messageNoAnimeInStorage = (storageType) => {
    return `<div class="library__message">
    <h2 class="library__text">No ${storageType} anime yet</h2>
    <img
      src="https://cdn.vox-cdn.com/thumbor/t5tvuSLje1qJDX4dr4-mXK_00eY=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/70922041/Screen_Shot_2022_05_26_at_10.49.28_AM.0.png"
      alt="anya"
      width="200"
      class="library__img"
    />
</div>`
}
