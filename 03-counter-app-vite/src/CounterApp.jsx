import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

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
      <h2> {value} </h2>
      <h3>{contador}</h3>
      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}


CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
  value: 0,
}