import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  // Estados
  const [inputValue, setInputValue] = useState('');
  // Funciones
  // Permite el cambio de valor del input
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  // Envia el valor al parent
  const onSubmit = (e) => {
    e.preventDefault();
    // Limpiamos el input
    const newInputValue = inputValue.trim();
    // Enviamos el valor al parent
    const isValid = onNewCategory(newInputValue);
    // validamos que el valor se ingreso correctamente
    if (!isValid) return;
    // Limpiamos el input en caso de que se ingrese correctamente
    setInputValue('');
  };
  // render
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Busca tus gifs favoritos"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
// AddCategory.prototype = {
//   setCategories: PropTypes.func.isRequired
// }