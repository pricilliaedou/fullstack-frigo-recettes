import { useState } from "react";
import Loader from "./composants/loader/Loader";
import Header from "./composants/Header";
import Produits from "./composants/Produits";

import "./index.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const stopLoading = () => setIsLoading(false); // Fonction pour arrêter le chargement

  return (
    <div className='container'>
      {isLoading && <Loader />} {/* Le loader est affiché au démarrage */}
      <Header />
      <main>
        <section className='main-left'>
          <Produits stopLoading={stopLoading} />
        </section>
        <section className='main-right'></section>
      </main>
    </div>
  );
};

export default App;
