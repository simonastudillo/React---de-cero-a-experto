import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test para 06-deses-obj.js', () => {
    
    test('Desestructuración de objetos', () => {

        const persona = {
          nombreClave: 'Tony',
          edad: 45,
          latlng: {
            lat: 14.1232,
            lng: -12.3232
          }
        };

        const testPersona = usContext( persona );
        console.log( testPersona );
        expect( testPersona ).toEqual( persona );
    });
});