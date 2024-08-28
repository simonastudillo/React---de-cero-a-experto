import { render, screen } from '@testing-library/react';
import { getGifs } from '../../src/helpers/getGifs';

// import { gifs } from '../../src/data/gifs';
// import { gifsMock } from '../../src/data/gifsMock';

describe('getGifs', () => {

  const category = 'animals';

  test('DEbe de retornar un arreglo de gifs', async() => {
    const gifs = await getGifs(category);
    // Sabemos que el arreglo de gifs tiene que ser mayor a cero
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    });
  });

  // test('debe de retornar un array vacío si no hay datos', () => {
  //   expect(getGifs()).toEqual([]);
  // });

  // test('debe de retornar un array con los datos de gifs', () => {
  //   expect(getGifs(gifs)).toEqual(gifs);
  // });

  // test('debe de retornar un array con los datos de gifsMock', () => {
  //   expect(getGifs(gifsMock)).toEqual(gifsMock);
  // });

});