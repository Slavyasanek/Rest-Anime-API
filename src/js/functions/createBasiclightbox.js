import * as basicLightbox from 'basiclightbox';

export const loadFullPoster = () => {
    const closePhotoByKeyPress = (event) => {
        if (event.code !== 'Escape') {
            return;
        }
        return largePhoto.close();
    }
    const selectImage = event.target.src;
    console.log(selectImage)
    const largePhoto = basicLightbox.create(
        `<img src="${selectImage}">`, {
        onShow: () => {
            window.addEventListener('keydown', closePhotoByKeyPress)
        },
        onClose: () => {
            window.removeEventListener('keydown', closePhotoByKeyPress)
        }
    });
    largePhoto.show();
}
