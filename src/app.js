import  express, { json }  from "express";
import { routes } from "./routes/routes.js";


import { sequelize } from "./models/db.js";
import { Tournoi } from "./models/tournoi.model.js";
import { Joueur } from "./models/joueur.model.js";
import { Rencontre } from "./models/rencontre.model.js";


//initialisation de l'application serveur avec express
const app = express();

//permet à l'application de lire (désérialiser) du json
app.use(json());

app.use(routes);

//écouter le port 3000
app.listen(3000, () => {
    console.log('Listening port 3000')
})