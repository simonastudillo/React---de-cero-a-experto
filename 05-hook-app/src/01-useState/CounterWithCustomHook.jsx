import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
      <button className="btn btn-success" onClick={() => increment(10)}>+10</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-danger" onClick={() => decrement(10)}>-10</button>
    </>
  )
}
