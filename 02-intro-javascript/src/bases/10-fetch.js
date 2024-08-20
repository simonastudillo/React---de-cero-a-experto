// Fetch
const apiKey = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';
// url endpoint
const url = 'https://api.giphy.com/v1/stickers/random';

const peticion = fetch(`${url}?api_key=${apiKey}`);

// peticion.then((resp) => {
//   resp.json().then(data => {
//     console.log(data);
//   });
// }).catch(console.warn);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);