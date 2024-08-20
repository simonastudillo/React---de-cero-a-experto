// Arreglos en javascript

// no iniciarlizar array de esa forma
const arreglo = new Array(100);

arreglo.push(1);

console.log( arreglo );

const arreglo2 = [];
// no usar push
arreglo2.push(1);
arreglo2.push(2);
arreglo2.push(3);
arreglo2.push(4);

console.log( arreglo2 );

const arreglo3 = [ 1, 2, 3, 4 ];

let arreglo4 = [ ...arreglo3, 5 ];

console.log( arreglo3 );
console.log( arreglo4 );

const arreglo5 = arreglo4.map( function ( numero ) {
    return numero * 2
});

console.log( arreglo5 );