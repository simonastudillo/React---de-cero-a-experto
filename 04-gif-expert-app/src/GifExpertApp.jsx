import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

// const apiKey = 'f27mRsYu9GujEadQEM9xIa3a4v6gxf1G';
export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  const onAddCategory = (valor) => {
    // Validamos que el valor no sea vacio
    if (valor.trim().length <= 1) return;
    // Validamos que no exista el valor en el array
    // if (categories.includes(valor)) return;
    if (categories.filter((cat) => cat.toLowerCase() == valor.toLowerCase()).length > 0) return;
    // Agregamos el valor al array
    setCategories([valor, ...categories]);
    return true;
  };

  const onRemoveCategory = (category) => {
    setCategories(categories.filter((cat) => cat.toLowerCase() != category.toLowerCase()));
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      {
        categories.map(
          (category) => (
            <GifGrid key={category} category={category} onRemoveCategory={onRemoveCategory} />
          )
        )
      }
    </>
  );
};
