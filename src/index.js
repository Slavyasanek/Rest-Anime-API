fetch('https://api.consumet.org/anime/gogoanime/info/spy-x-family')
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.log(e))


import './js/color-switcher';
import './js/functions/api'
import './js/getRecentUploads';
import './js/searchAnime';
import './js/getTopAnime';
import './js/popup'
import './js/addLikedAnime';