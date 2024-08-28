import { useState } from "react";
import PropTypes from 'prop-types';

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
    // console.log('onSubmit');
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
    <form onSubmit={onSubmit} aria-label="form-add-category">
      <input
        type="text"
        placeholder="Busca tus gifs favoritos"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}