
import { Tournoi } from "../models/tournoi.model.js"
import { TournoiDTO } from "../dto/tournoi/tournoi.dto.js"
import { CreateTournoiBodySchema } from "../validations/create.tournoi.body.schema.js";
import { DATE } from "sequelize";
import { TournoiService } from "../services/tournoi.service.js";
import { Joueur } from "../models/joueur.model.js";

const index = async (req, res) => {
    //const { status, genre } = req.query

    const tournois = (await Tournoi.findAll({
        where: req.query
    })).map(t => new TournoiDTO(t));

    res.json(tournois);
}

const create = async (req, res) => {
    try {
       const tournoi = await CreateTournoiBodySchema.validate(req.body, {
        abortEarly: false
       });
       //sauvegarder en db;
       const result = await Tournoi.create({
        ...tournoi,
        status: 'Planifié',
        maxJoueurs: tournoi.maxJoueurs ?? tournoi.minJoueurs
        }); 
       res.json(result);
    } catch (error) {
        res.status(400).json(error);
    }
}

const start = async(req, res) => {
    //permet de récupérer dans la db via l'id
    const {id} = req.params;
    //on va chercher un seul tournoi
    const tournoi = await Tournoi.findByPk(id, {
        include: [Joueur] //permet de faire une jointure via la table inscriptions, il arrive a comprendre que ça vient depuis joueurs
    });
    if (!tournoi) {
        res.status(404).send('Ce tournoi n\'existe pas');
        return;
    }
    try {
        const result = await TournoiService.start(tournoi);
        res.json(result);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
    
}

export const TournoiController = { index, create, start } 