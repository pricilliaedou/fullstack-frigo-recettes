import React, { useEffect, useState } from "react";
import axios from "axios";

export const Recettes = ({ stopLoading }) => {
  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/recettes");
        console.log(response.data);
        setRecettes(response.data);
      } catch (error) {
        console.log(error.response);
      } finally {
        stopLoading();
      }
    };
    fetchData();
  }, [stopLoading]);
  return (
    <div className='recettes'>
      <h1> Mes recettes</h1>
      <div className='livre-recettes'>
        {recettes.map((recette) => {
          console.log(recette);
          return (
            <div className='recette'>
              <h2>{recette.nom}</h2>
              <p>Ingrédients : {recette.ingredients}</p>
              <p>Instructions : {recette.instructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
