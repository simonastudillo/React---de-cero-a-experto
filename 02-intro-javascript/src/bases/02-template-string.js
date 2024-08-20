// variables y constantes
// no usar var, usar const o let
const nombre    = 'Fernando';
const apellido  = 'Herrera';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido } ${ 1 + 1 }`;

console.log( nombreCompleto );

function getSaludo(nombre = ''){
    return 'Hola mundo '+nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto) }`);