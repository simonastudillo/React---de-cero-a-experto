//  Promesas
import { getHeroeById } from './bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // Tarea
//     // 1.- Importar getHeroesById, asignar valor 2, console.log(2)
//     const p1 = getHeroeById(2);
//     console.log(p1);
//     resolve(p1);
//     // reject(new Error('No se pudo encontrar el héroe'));
//   }, 2000);
// });

// promesa.then((heroe) => {
//   console.log('Then de la promesa');
//   console.log(heroe);
// }).catch(err => {
//   console.warn(err);
//   // throw new Error(err);
// });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Tarea
      // 1.- Importar getHeroesById, asignar valor 2, console.log(2)
      const p1 = getHeroeById(id);
      // verificamos si existe
      if (p1 === undefined) reject(new Error('No se pudo encontrar el héroe'));
      resolve(p1);
      // reject(new Error('No se pudo encontrar el héroe'));
    }, 2000);
  });
};

const existeHeroe = (heroe) => {
  console.log('Then de la promesa');
  console.log(heroe);
};

getHeroeByIdAsync(2).then(existeHeroe).catch(console.warn);
