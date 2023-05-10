
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { Joueur } from "./joueur.model.js";

export const Inscription = sequelize.define('inscription', {
    inscriptionId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
})

