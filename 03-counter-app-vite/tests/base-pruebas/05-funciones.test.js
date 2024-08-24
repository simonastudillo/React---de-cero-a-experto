import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
  test('getUser debe retornar un objeto', () => {
    const testUser = { uid: 'ABC123', username: 'El_Papi1502' };
    const user = getUser();
    console.log( user );
    expect( user ).toEqual( testUser );
  })
  test('getUsuarioActivo debe retornar un objeto', () => {
    const name = 'Fernando';
    const testUser = { uid: 'ABC567', username: name };
    const usuarioActivo = getUsuarioActivo(name);
    expect( usuarioActivo ).toEqual( testUser );
  })
});