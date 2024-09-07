// import { useEffect } from "react";
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { useCounter, useFetch } from "../hooks";
import { Quote } from "./Quote";

export const Layout = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError, error } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

  return (
    <>
      <h1>Información de Breaking Bad</h1>
      <hr />
      {isLoading ? <LoadingMessage /> : <Quote author={data[0].author} quote={data[0].quote} />}
      {hasError && <p>Error: {error}</p>}
      {
        counter > 1 &&
        <button className="btn btn-primary mt-2" onClick={() => decrement()}>
          Anterior
        </button>
      }
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  )
}
