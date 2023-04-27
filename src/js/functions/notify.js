import Notiflix from 'notiflix';

Notiflix.Notify.init({
    info: {
        background: 'rgb(114, 137, 218)',
    },
})

export const infoNoResults = () => {
    console.log(`work`)
    return Notiflix.Notify.info(`No results`, {
        timeout: 3000,
        width: '200px',
        borderRadius: '0px',
        fontFamily: 'Josefin Sans',
        fontSize: '18px',
    })
}
