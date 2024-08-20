// Desestructuración de Objetos
// Asignación Desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman'
}

const { nombre: nombre2, edad, clave } = persona

console.log(nombre2)
console.log(edad)
console.log(clave)

const useContext = ({ clave, edad, rango = 'Capitán' }) => {
  return {
    nombreClave: clave,
    anios: edad,
    rango,
    latlng: {
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona)

console.log(nombreClave)
console.log(anios)
console.log(lat)
console.log(lng)
