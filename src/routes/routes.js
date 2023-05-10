import { Router } from "express";
import { TournoiController } from "../controllers/tournoi.controller.js";
import { Joueur } from "../models/joueur.model.js";
import { JoueurController } from "../controllers/joueur.controller.js";
import { Inscription } from "../models/inscription.model.js";
import { InscriptionController } from "../controllers/inscription.controller.js";



export const routes = Router();

routes.route('/tournoi')
    .get(TournoiController.index)
    .post(TournoiController.create)

//le :id est un paramètre qui va dire à la route par lequel passer 
routes.route('/tournoi/:id/start')
    .patch(TournoiController.start)


routes.route('/joueur')
    .post(JoueurController.create)


routes.route('/inscription')
    .post(InscriptionController.create)
// http request
// - headers (meta données de la requete)
// - body (données de la requete)
// dans le cas des recherches on envoie l'info dans la querry, dans tous les autres cas, on l'envoie dans le body