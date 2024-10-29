const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "descodeuses",
  database: "frigo_recettes",
});

db.connect((err) => {
  if (err) {
    console.error(
      "Une erreur s'est produite lors de la connexion à la base de donnée 😞 :",
      err
    );
    throw err;
  }
  console.log("Connecté à la base de données MySQL! 🥳 🥉");
});
// Route en GET

// Utilisation d'un try permettant d'exécuter du code susceptible de déclencher une erreur. Si une erreur se produit, elle est interceptée par un bloc catch.

app.get("/produits", (req, res) => {
  const sql = "SELECT * FROM produits";

  try {
    db.query(sql, (err, result) => {
      if (!err) {
        console.log("Opération réussie 🔥");
        return res.json(result); // Requête réussie, réponse envoyée en JSON
      }

      // Si une erreur survient, elle est levée pour être capturée par le bloc catch
      //on peut faire throw err; // seulement on ne pourra pas personnalisé le msg de l'erreur
      throw new Error(
        "Erreur lors de l'exécution de la requête 😥: " + err.message
      );
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error); // Utilisation de `error` et non `err`
    res.status(500).send("Erreur lors de la récupération des produits");
  }
});

app.get("/recettes", (req, res) => {
  const sql = "SELECT * FROM recettes";

  try {
    db.query(sql, (err, result) => {
      if (!err) {
        console.log("Opération réussie 🔥");
        return res.json(result); // Requête réussie, réponse envoyée en JSON
      }

      // Si une erreur survient, elle est levée pour être capturée par le bloc catch
      //on peut faire throw err; // seulement on ne pourra pas personnalisé le msg de l'erreur
      throw new Error(
        "Erreur lors de l'exécution de la requête 😥: " + err.message
      );
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error); // Utilisation de `error` et non `err`
    res.status(500).send("Erreur lors de la récupération des produits");
  }
});

app.all("*", function (req, res) {
  res.status(404).send("Page not found 😞");
});
app.listen(3000, () => {
  console.log("serveur en route 🔥🚀");
});
