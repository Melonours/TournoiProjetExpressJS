import { CreateJoueurDTO } from "../dto/joueur/create.joueur.dto.js";
import { Joueur } from "../models/joueur.model.js";
import { CreateJoueurBodySchema } from "../validations/create.joueur.body.schema.js";
import { DATE } from "sequelize";

const create = async (req, res) => {
   try {
        const joueur = await CreateJoueurBodySchema.validate(req.body, {
            abortEarly: false
        });

        const exists =  await Joueur.findOne({where: { email: joueur.email } });
        if (exists) {
            res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }
        const result = await Joueur.create({
            ...joueur
        });
        res.json(new CreateJoueurDTO(result));

   } catch (error) {
    res.status(400).json(error);
   }
}

export const JoueurController = { create }