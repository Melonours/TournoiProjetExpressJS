import { Joueur } from "../models/joueur.model.js";
import { Tournoi } from "../models/tournoi.model.js";
import { yearDiff } from "../utils/date.utils.js";

const start = async (tournoi) => {
    if (tournoi.status !== 'Planifié') {
        throw new Error('Le tournoi a déjà démarré');
    }
    if (tournoi.dateDeDebut > new DATE()) {
        throw new Error('Les inscriptions sont toujours ouvertes');
    }
    if (tournoi.joueurs.length < tournoi.minJoueurs) {
        throw new Error('Pas assez de joueurs');
    }
    tournoi.status = 'Pret'; 
    return await tournoi.save();
    //return await Tournoi.update(tournoi, {where: { id: tournoi.id } });
}

const register = async (tournoi, joueur) => {
    if(tournoi.status !== 'Planifié'){
        throw new Error('Le tournoi a déjà commencé ou est terminé');
    }
    if(tournoi.joueurs.length >= tournoi.maxJoueurs) {
        throw new Error('Le tournoi est complet');
    }
    if(tournoi.joueurs.find(j => j.id === joueur.id)){
        throw new Error ('Le joueur est déjà inscrit');
    }
    if(tournoi.genre !== 'X' && tournoi.genre !== joueur.genre){
        throw new Error ('Les genres ne correspondent pas');
    }
    if (tournoi.ageRequis && yearDiff(joueur.dateNaissance, tournoi.dateDeDebut) < tournoi.ageRequis){
        throw new Error ('Age invalide');
    }
    return await tournoi.addJoueur(joueur);
}

export const TournoiService = { start }

