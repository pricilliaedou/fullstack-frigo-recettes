import { useEffect, useState } from "react";
import Ingredients from "../assets/ingredients.png";
import ToggleButton from "./ToggleButton";
import axios from "axios";

const Produits = ({ stopLoading }) => {
  const [produits, setProduits] = useState([]);
  const [isOpenFridge, setIsOpenFridge] = useState(false);
  const handleToggleFrigo = () => {
    setIsOpenFridge(!isOpenFridge);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/produits");
        console.log(response.data);
        setProduits(response.data);
      } catch (error) {
        console.log(error.response);
      } finally {
        stopLoading(); // Appelle stopLoading après la requête pour arrêter le loader
      }
    };
    fetchData();
  }, [stopLoading]);
  return (
    <div className='products'>
      <div className='products-left'>
        <h1>"Créez des recettes avec les trésors cachés de votre frigo 😋"</h1>
        <p>
          Créez des recettes avec les trésors cachés de votre frigo et découvrez
          le plaisir de cuisiner sans gaspiller. En utilisant chaque ingrédient
          déjà présent chez vous, transformez les restes en plats gourmands et
          contribuez à une cuisine plus responsable.
        </p>
        <div className='btn'>
          <div>
            <a>Ajouter un ingrédient</a>
          </div>
          <div>
            <ToggleButton onToggle={handleToggleFrigo} />
          </div>
        </div>
      </div>

      <div className='products-right'>
        {/* Afficher l'image ou la liste des produits selon l'état du frigo */}
        {isOpenFridge ? (
          <div className='list-products'>
            {produits.length > 0 &&
              produits.map((produit) => (
                <div key={produit.id} className='product'>
                  <h3>{produit.nom}</h3>
                  <p>Quantité : {produit.quantite}</p>
                  <p>Expire le : {produit.date_expiration}</p>
                  <p>Catégorie : {produit.categorie}</p>
                </div>
              ))}
          </div>
        ) : (
          <img src={Ingredients} alt='Ingrédients' />
        )}
      </div>
    </div>
  );
};
export default Produits;
