import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const awaitForGifs = async () => {
    const gifs = await getGifs(category);
    setGifs(gifs);
    setIsLoading(false);
  };
  
  // Se ejecuta una vez al renderizar el componente
  useEffect(() => {
    awaitForGifs();
  }, []);

  return {
    gifs,
    isLoading
  }
}
