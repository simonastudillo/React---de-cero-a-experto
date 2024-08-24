import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Prueba 11-async-await.js', () => { 
  // test('getImagen debe retornar una imagen', async() => {
  //   const url = await getImagen();
  //   expect( typeof url ).toBe( 'string' );
  // });
  test('getImagen debe retornar un error', async() => {
    const url = await getImagen();
    expect( url ).toBe( 'Ocurrio un error' );
  });
});
