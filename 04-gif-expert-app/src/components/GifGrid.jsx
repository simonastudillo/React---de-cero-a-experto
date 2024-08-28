import { GifItem } from "./GifItem";
import { PropTypes } from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category, onRemoveCategory }) => {

  // const [gifs, setGifs] = useState([]);

  // useEffect(() => {
  //   getGifs(category)
  //     .then(gifs => setGifs(gifs));
  // }, []);

  // const awaitForGifs = async (category) => {
  //   const gifs = await getGifs(category);
  //   setGifs(gifs);
  // };

  // useEffect(() => {
  //   awaitForGifs(category);
  // }, []);

  // Custom hook 
  const { gifs, isLoading } = useFetchGifs(category);


  return (
    <>
      <h3>{category} <button onClick={() => onRemoveCategory(category)}>Eliminar</button></h3>
      {
        isLoading && (<h2>Cargando...</h2>)
      }
      <div className="card-grid">
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};