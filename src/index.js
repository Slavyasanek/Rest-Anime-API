fetch('https://api.consumet.org/anime/gogoanime/demon?page=2')
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.log(e))

fetch('https://api.consumet.org/anime/gogoanime/watch/spy-x-family-episode-1')
.then(r => r.json())
.then(d => console.log(d))
.catch(e => console.log(e))
console.log(`wow`);
