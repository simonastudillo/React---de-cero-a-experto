import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

const heroesOriginal = heroes;

describe('Prueba de 08-imp-exp.js', () => { 
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const respuesta = getHeroeById(id);
    expect( respuesta ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
  });
  test('getHeroeById debe retornar undefined si no existe', () => {
    const id = 100;
    const respuesta = getHeroeById(id);
    expect( respuesta ).toEqual( undefined );
    expect( respuesta ).toBeFalsy();
  });
  // TAREA: getHeroesByOwner
  test('getHeroeById evaluar cantidad retornada par DC', () => {
    const owner = 'DC';
    const respuesta = getHeroesByOwner(owner);
    expect( respuesta.length ).toBe( 3 );
    expect( respuesta ).toHaveLength( 3 );
    expect( respuesta ).toEqual([{ id: 1, name: 'Batman', owner: 'DC' }, {id: 3, name: 'Superman', owner: 'DC'}, { id: 4, name: 'Flash', owner: 'DC'}]);
    expect( respuesta ).toEqual(heroesOriginal.filter( (heroe) => heroe.owner === owner));
  });
  test('getHeroeById evaluar cantidad retornada par Marvel', () => {
    const owner = 'Marvel';
    const respuesta = getHeroesByOwner(owner);
    expect( respuesta.length ).toBe( 2 );
    expect( respuesta ).toHaveLength( 2 );
  });
});
