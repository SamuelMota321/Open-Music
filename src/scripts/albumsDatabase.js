export default async function importAPI() {
    await fetch('https://openmusic-fake-api.onrender.com/api/musics')
        .then(function (response) {
            return response.json();
        })
        .then(function (albumList) {
            albumList.forEach((album) => {
                const card = createAlbumCard(album);
                grid.appendChild(card);
            });
        })
        .catch(function (error) {
            console.error('Erro na requisição:', error);
        });
}

const grid = document.querySelector('.card-list');

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

const createAlbumCard = (album) => {
    const card = createElement('div', 'card');
    const img = createElement('img', 'album-img');
    const albumTitle = createElement('h2', 'album-title');
    const albumDetails = createElement('div', 'album-details');
    const p1 = document.createElement('p');
    const p2 = createElement('p', 'album-genre');
    const pricing = createElement('div', 'pricing');
    const albumPrice = createElement('h2', 'album-price');
    const span = createElement('span');
    const buttonBuy = createElement('button', 'buy');

    img.src = album.img;
    albumTitle.innerHTML = album.title;
    p1.innerHTML = album.band;
    p2.innerHTML = album.genre;
    albumPrice.innerHTML = "R$ ";
    span.innerHTML = album.price;
    buttonBuy.innerHTML = 'Comprar';

    card.appendChild(img);
    card.appendChild(albumTitle);
    card.appendChild(albumDetails);
    card.appendChild(pricing);
    albumDetails.appendChild(p1);
    albumDetails.appendChild(p2);
    albumPrice.appendChild(span);
    pricing.appendChild(albumPrice);
    pricing.appendChild(buttonBuy);

    return card;
};
