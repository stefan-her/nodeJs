'use strict';

import express from 'express';
import router from './routers/index.js';

const app = express();

const { PORT, NODE_ENV } =  process.env;


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

app.use(function errorMiddleware(error, req, res, next) {

    if(NODE_ENV === "dev") {
        const objError = {
            'message' : error.message,
            'error' : error.stack
        }

        res.status(500).json(objError);
        console.error(objError);
        
        return;
    }
    res.sendStatus(500);
})




app.listen(PORT, () => {
    console.log(`WEB API running on port ${PORT}`)
});