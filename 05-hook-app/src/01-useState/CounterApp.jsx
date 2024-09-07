import { useState } from "react";

export const CounterApp = () => {
  // Inicializamos valor
  // const [count, setCount] = useState(10);

  const [counter, setCount] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  });
  const { counter1, counter2, counter3 } = counter;

  return (
    <>
      <h4>Count 1: {counter1}</h4>
      <h4>Count 2: {counter2}</h4>
      <h4>Count 3: {counter3}</h4>
      <hr />
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          setCount(prevCount => {
            return {
              counter1: prevCount.counter1 + 1,
              counter2: prevCount.counter2 + 2,
              counter3: prevCount.counter3 + 3
            }
          })
        }}
      >Increment</button> */}
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount({
            ...counter, counter1: counter1 + 1
          })
        }}
      >Increment</button>
      <button
        className="btn btn-danger"
        onClick={() => {
          setCount(prevCount => {
            return {
              counter1: prevCount.counter1 - 1,
              counter2: prevCount.counter2 - 2,
              counter3: prevCount.counter3 - 3
            }
          })
        }}
      >Decrement</button>
    </>
  )
}
