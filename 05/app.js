import express from 'express';
const app = express();

/** recupération des variables d'environnement */
const { NODE_ENV, PORT }  = process.env;

/** Ajout des middleweares */
app.use(express.json());


/** Démarrage de l'API */
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT}`);
});