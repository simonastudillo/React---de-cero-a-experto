import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value = 0 }) => {

  const [contador, setContador] = useState(value);

  const suma = () => {
    // setContador(contador + 1)
    setContador((c) => c + 1);
  }
  const resta = () => setContador((c) => c - 1);
  const reset = () => setContador(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{contador}</h2>
      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
      <button aria-label='btn-reset' onClick={reset}>Reset</button>
    </>
  );
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}