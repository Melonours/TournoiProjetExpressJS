import { Inscription } from "../models/inscription.model.js";
import { Joueur } from "../models/joueur.model.js";
import { Tournoi } from "../models/tournoi.model.js";
import { TournoiService } from "../services/tournoi.service.js";
import { CreateInscriptionBodySchema } from "../validations/create.inscription.body.schema.js";
import { DATE } from "sequelize";

const create = async (req, res) => {
    try {
         const inscription = await CreateInscriptionBodySchema.validate(req.body, {
             abortEarly: false
         });

         const tournoi = Tournoi.findByPk(inscription.tournoiId, {
            include: Joueur});

         const joueur = Joueur.findByPk(inscription.joueurId);

         if (!tournoi || !joueur){
            res.status(400).json(message,'Joueur ou Tournoi introuvable');
         }
         const result = TournoiService.register(tournoi, joueur);
         res.json(result);
    } catch (error) {
     res.status(400).json(error);
    }
 }
 
 export const InscriptionController = { create }