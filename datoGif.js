const obtenerGifs = async () => {

    const gifsContainer = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif');

    const url = "https://api.giphy.com/v1/stickers/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&limit=8";

    const response = await fetch(url);
    const data = await response.json();

    data.data.forEach(sticker => {
        const newGifCard = gifTemplate.cloneNode(true);
        const img = newGifCard.querySelector('img');
        img.src = sticker.images.fixed_height.url;
        gifsContainer.appendChild(newGifCard);
    });

        gifTemplate.remove();

};

obtenerGifs();