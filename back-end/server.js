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

// Utilisation d'un try permettant d'exécuter du code susceptible de déclencher une erreur. Si une erreur se produit, elle sera interceptée par un bloc catch.

app.get("/produits", (req, res) => {
  res.status(200).send("Hello, je teste le serveur 🔥");
});

app.all("*", function (req, res) {
  res.status(404).send("Page not found 😞");
});
app.listen(3000, () => {
  console.log("serveur en route 🔥🚀");
});
