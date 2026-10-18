const filmList = document.querySelector('#film-list');
const filmButtons = [...document.querySelectorAll('.film-item')];
const searchInput = document.querySelector('#search-input');
const sortSelect = document.querySelector('#sort-select');
const player = document.querySelector('#movie-player');
const playerTitle = document.querySelector('#player-title');
const playerDescription = document.querySelector('#player-description');
const countLabel = document.querySelector('#film-count');
const emptyState = document.querySelector('#empty-state');
const videoTab = document.querySelector('#tab-video');
const youtubeTab = document.querySelector('#tab-youtube');
const videoPanel = document.querySelector('#html5-panel');
const youtubePanel = document.querySelector('#youtube-panel');

function selectFilm(button) {
    filmButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle('selected', selected);
        item.setAttribute('aria-pressed', String(selected));
    });
    playerTitle.textContent = button.dataset.title;
    playerDescription.textContent = button.dataset.description;
    player.pause();
    player.src = button.dataset.src;
    player.poster = button.dataset.poster;
    player.load();
}

filmButtons.forEach((button) => button.addEventListener('click', () => selectFilm(button)));

function updateFilmList() {
    const query = searchInput.value.trim().toLocaleLowerCase('vi');
    const visibleFilms = filmButtons.filter((button) => button.dataset.title.toLocaleLowerCase('vi').includes(query));
    const sortedFilms = [...visibleFilms].sort((a, b) => {
        if (sortSelect.value === 'views') return Number(b.dataset.views) - Number(a.dataset.views);
        return Number(b.dataset.date) - Number(a.dataset.date);
    });

    sortedFilms.forEach((button) => {
        button.hidden = false;
        filmList.insertBefore(button, emptyState);
    });
    filmButtons.filter((button) => !visibleFilms.includes(button)).forEach((button) => { button.hidden = true; });
    countLabel.textContent = `${visibleFilms.length} phim`;
    emptyState.hidden = visibleFilms.length > 0;
}

searchInput.addEventListener('input', updateFilmList);
sortSelect.addEventListener('change', updateFilmList);

function showPlayer(type) {
    const showVideo = type === 'video';
    videoPanel.hidden = !showVideo;
    youtubePanel.hidden = showVideo;
    videoTab.classList.toggle('active', showVideo);
    youtubeTab.classList.toggle('active', !showVideo);
    videoTab.setAttribute('aria-selected', String(showVideo));
    youtubeTab.setAttribute('aria-selected', String(!showVideo));
    if (!showVideo) player.pause();
}

videoTab.addEventListener('click', () => showPlayer('video'));
youtubeTab.addEventListener('click', () => showPlayer('youtube'));

updateFilmList();
