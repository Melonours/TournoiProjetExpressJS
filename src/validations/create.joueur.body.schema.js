import yup, { date } from 'yup';


export const CreateJoueurBodySchema = yup.object({
    nom: yup.string().required().min(2).max(63),
    prenom: yup.string().required().min(2).max(63),
    dateNaissance: yup.date().required().max(new Date()),
    genre: yup.string().oneOf(['M','F', 'X']).required(),
    email: yup.string().email().required().max(255),
})