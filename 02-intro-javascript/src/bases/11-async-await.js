// Async

// const getImagenPromesa = () => new Promise(resolve => resolve('https://askjaks.com'));
// getImagenPromesa().then( console.log );

const getImagen = async () => {
  try {
    const apiKey = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';
    // url endpoint
    const url = 'https://api.giphy.com/v1/stickers/random';
    const resp = await fetch(`${url}?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url: urlImagen } = data.images.original;
    const img = document.createElement('img');
    img.src = urlImagen;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.log(error);
  }
};

getImagen();