function applyGenreFilter() {
    const activeGenres = document.querySelectorAll('.genre__item.active');
    const albums = document.getElementsByClassName('card');

    [...albums].forEach((album) => {
        const albumGenreElement = album.querySelector('.album-genre');
        const albumGenres = albumGenreElement ? albumGenreElement.textContent.trim() : '';

        if (activeGenres.length === 0 || activeGenres[0].textContent.trim() === 'Todos' || albumGenres === 'Todos') {
            album.style.display = 'block';
            return;
        }

        const shouldDisplay = Array.from(activeGenres).some((activeGenre) => {
            return albumGenres.includes(activeGenre.textContent.trim());
        });

        album.style.display = shouldDisplay ? 'block' : 'none';
    });
}

export default function selectGenre() {
    const genres = document.getElementsByClassName('genre__item');

    [...genres].forEach((genre) => {
        genre.addEventListener('click', () => {
            [...genres].forEach((otherGenre) => {
                if (otherGenre !== genre) {
                    otherGenre.classList.remove('active');
                }
            });

            if (genre.classList.contains('active')) {
                genre.classList.remove('active');
            } else {
                genre.classList.add('active');
            }

            applyGenreFilter();
        });
    });
}
