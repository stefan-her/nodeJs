import express from 'express';
import mainRoute from './routes/guest.router.js';
import db from './models/index.js';
const app = express();

/** recupération des variables d'environnement */
const { NODE_ENV, PORT }  = process.env;

/** Test de connexion */
db.sequelize.authenticate()
    .then(() => { console.log("connnexion à la DB"); })
    .catch((error) => { console.error(`Connexion Erreur ${error}`); });

// if(NODE_ENV === "dev") db.sequelize.sync({ alter: true });

/** Ajout des middleweares */
app.use(express.json());

/** Ajout des routes */
app.use(mainRoute);

/** Démarrage de l'API */
app.listen(PORT, () => {
    console.log(`Web API running on port ${PORT}`);
});