import { useEffect, useState } from "react";
import axios from "axios";

const Produits = ({ stopLoading }) => {
  const [produits, setProduits] = useState([]);

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
    <div>
      <h2>"Créez des recettes avec les trésors cachés de votre frigo 😋"</h2>
      <p>
        Créez des recettes avec les trésors cachés de votre frigo et découvrez
        le plaisir de cuisiner sans gaspiller. En utilisant chaque ingrédient
        déjà présent chez vous, transformez les restes en plats gourmands et
        contribuez à une cuisine plus responsable.
      </p>
      <section className='products'>
        {produits.map((produit) => {
          return (
            <div key={produit.id} className='product'>
              <h3>{produit.nom}</h3>
              <p>Quantité : {produit.quantite}</p>
              <p>Date d'expiration : {produit.deta_expiration}</p>
              <p>Catégorie : {produit.categorie}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Produits;
