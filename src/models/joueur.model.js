import { DataTypes } from "sequelize";
import {sequelize} from "./db.js";
import { Tournoi } from "./tournoi.model.js";
import { Inscription } from "./inscription.model.js";

export const Joueur = sequelize.define('joueur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateNaissance:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    genre:{
        type: DataTypes.ENUM('M', 'F', 'X'),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
    },
})

Joueur.belongsToMany(Tournoi, {through: 'inscriptions'});
Tournoi.belongsToMany(Joueur, {through: 'inscriptions'});