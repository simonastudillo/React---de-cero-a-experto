// Funciones JS
function saludar ( nombre ) {
    return `Hola, ${ nombre }`;
}

console.log( saludar('Goku') );

saludar = 30;

console.log( saludar );

const saludar2 = function ( nombre ) {
    return `Hola, ${ nombre }`;
}

console.log( saludar2('Bulma') );

// saludar2 = 30;

console.log( saludar2 );

const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log( saludar3('Vegeta') );

const saludar4 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar4('Gohan') );

const saludar5 = () => `Hola Mundo`;

console.log( saludar5() );

const getUser = () => (
    {
        uid: 'ABC123',
        username: 'El_Papi502'
    }
)

console.log( getUser() );

// Tarea:
// 1.- Transformar a función de flecha
// 2.- Tiene que retornar un objeto implicito
// 3.- Pruebas
function getUsuarioActivo( nombre ) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usuarioActivo = getUsuarioActivo('Fernando');

console.log( usuarioActivo );

// Resolución tarea

const getUsuarioActivo2 = ( nombre ) => (
    {
        uid: 'ABC567',
        username: nombre
    }
);

const usuarioActivo2 = getUsuarioActivo2('Fernando');

console.log( usuarioActivo2 );