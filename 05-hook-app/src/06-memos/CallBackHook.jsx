import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    console.log('Me genero :)');
    setCounter((cat) => cat + value);
  }, []);

  return (
    <>
      <h1>useCallBack hook {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
}
  ;