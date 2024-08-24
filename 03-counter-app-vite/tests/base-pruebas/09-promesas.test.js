import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas.js', () => {
  test('getHeroeByIdAsync debe retornar un héroe', (done) => {
    const id = 1;
    const promesa = getHeroeByIdAsync(id).then( (heroe) => {
      // expect( true ).toBe(false);
      expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
      done();
    });
  })
  test('getHeroeByIdAsync debe de obtener un erro si héroe no existe', (done) => {
    const id = 100;
    const promesa = getHeroeByIdAsync(id).then( (hero) => {
      // expect( true ).toBe(false);
      expect( hero ).toBeFalsy();
      done();
    }).catch( (err) => {
      expect( err ).toBe( 'No se pudo encontrar el héroe ' + id );
      done();
    });
  })
});