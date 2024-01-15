'use strict';

import express from 'express';
import router from './routers/index.js';

const app = express();

const { PORT } =  process.env;


app.use((req, res, next) => {
    const url = req.url;
    const method = req.method;

    // start le calcul du temps de la requete
    const timerStart = new Date();

    next();

    // affige du temps de la requete en milliseconde
    console.log(`temps d'exécution de la requete : ${new Date() - timerStart} ms`);
});

// Permet d'obtenir la bodu d'une requete 'application/json'
app.use(express.json());


app.use(router);

app.listen(PORT, () => {
    console.log(`WEB API running on port ${PORT}`)
});