import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter(1);
  const { data, isLoading, hasError, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Información de Pokémon</h1>
      <hr />
      {isLoading ? <LoadingMessage /> : <PokemonCard id={data.id} name={data.name} sprite={[
        data.sprites.back_default,
        data.sprites.front_default,
        data.sprites.back_shiny,
        data.sprites.front_shiny,
      ]} />}
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
