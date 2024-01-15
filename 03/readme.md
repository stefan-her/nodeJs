# Demo Express Web ApI

## initialisation du projet

```
npm init
npm i express
npm i nodemon --save-dev
```

## structure de fichier MVC

/
app.js
.gitignore

/routers

    index.js
    product.routers.js
    user.routers.js
/controllers

    index.js
    product.controller.js
    user.controller.js
/models

    index.js
    product.model.js
    user.model.js
/services

    index.js
    product.service.js
    user.service.js

# Les Routes

# route standard

```
const router = require('express').Router();

router.get('/', (req, res)  => {
    res.json({
        "message" : `Message -> ${MESSAGE}`
    });
});

```

## creation de prefix pour les routes

Dans le fichier routers/index.js 

```
const router = require('express').Router();

router.use('/demo', demo);

```

# Export des modules

Ne pas oublier l'export des objects en fin de fichier module

```
module.exports = router;
```