// Desestructuración de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];

console.log(personajes[0]);

const [, p2] = personajes;

console.log(p2);

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras);
console.log(numeros);

// Tarea
// 1.- el primer valor del arr se llamará nombre
// 2.- se llamadara setNombre
const useState = (valor) => {
  return [valor, () => {
    console.log('hola mundo');
  }];
};

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();
