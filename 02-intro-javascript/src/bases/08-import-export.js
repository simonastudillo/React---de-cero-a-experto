// import { heroes } from '../data/heroes';
import heroes from '../data/heroes';
// import heroes, { owners } from '../data/heroes';
// import { heroes, owners } from '../data/heroes';

// console.log(heroes);
// console.log(owners);

// Tarea
// 1.- Hacer funcionar la función
// const getHeroeById = (id) => {
//   return heroes.find((heroe) => heroe.id === id);
// };
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

// console.log(getHeroeById(2));
// console.log(getHeroeById(3));
// console.log(getHeroeById(4));

export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));
// console.log(getHeroesByOwner('Marvel'));