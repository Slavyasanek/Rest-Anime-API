// fetch('https://api.consumet.org/anime/gogoanime/recent-episodes')
// .then(r => r.json())
// .then(d => console.log(d))
// .catch(e => console.log(e))

fetch('https://api.consumet.org/anime/gogoanime/info/spy-x-family')
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.log(e))


import './js/functions/color-switcher';
import './js/functions/api'
import './js/getRecentUploads';
import './js/popup'