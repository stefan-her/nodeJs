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

## Middleware (req, res, next)

Est une fonction qui prend 3 paramêtres

- request
- reponse
- next ---> vers la fonction suivante (chainage)

ne pas oublier 
```
next();
```

Route avec Middleware(s) avant l'execution de la methode lié  à la route

```
router.get('/', Middleware(s), getMessage);
```

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="771px" height="322px" viewBox="-0.5 -0.5 771 322"><defs/><g><path d="M 110 320 L 110 0" fill="none" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="stroke"/><rect x="0" y="0" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 20px; margin-left: 50px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">Req</div></div></div></foreignObject><text x="50" y="27" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">Req</text></switch></g><rect x="150" y="0" width="80" height="320" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="152" y="2" width="76" height="316" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="140" y="0" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 20px; margin-left: 190px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">app</div></div></div></foreignObject><text x="190" y="27" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">app</text></switch></g><rect x="270" y="40" width="120" height="60" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="280" y="50" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 70px; margin-left: 330px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">logger</div></div></div></foreignObject><text x="330" y="77" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">logger</text></switch></g><rect x="390" y="110" width="120" height="60" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="400" y="120" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 140px; margin-left: 450px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">json</div></div></div></foreignObject><text x="450" y="147" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">json</text></switch></g><rect x="510" y="180" width="140" height="60" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="530" y="190" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 210px; margin-left: 580px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">mainRouter</div></div></div></foreignObject><text x="580" y="217" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">mainRout...</text></switch></g><rect x="650" y="250" width="120" height="60" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" pointer-events="all"/><rect x="660" y="260" width="100" height="40" fill="none" stroke="none" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 1px; height: 1px; padding-top: 280px; margin-left: 710px;"><div style="box-sizing: border-box; font-size: 0px; text-align: center;" data-drawio-colors="color: rgb(0, 0, 0); "><div style="display: inline-block; font-size: 24px; font-family: Helvetica; color: rgb(0, 0, 0); line-height: 1.2; pointer-events: all; font-weight: bold; white-space: nowrap;">Route '/'</div></div></div></foreignObject><text x="710" y="287" fill="rgb(0, 0, 0)" font-family="Helvetica" font-size="24px" text-anchor="middle" font-weight="bold">Route '/'</text></switch></g><path d="M 200 62 L 250 62 L 250 50 L 290 70 L 250 90 L 250 78 L 200 78 L 200 70 Z" fill="#fff2cc" stroke="#d6b656" stroke-miterlimit="10" pointer-events="all"/><path d="M 40 62 L 180 62 L 180 50 L 220 70 L 180 90 L 180 78 L 40 78 L 40 70 Z" fill="rgb(255, 255, 255)" stroke="rgb(0, 0, 0)" stroke-miterlimit="10" pointer-events="all"/><path d="M 340 102 L 390 102 L 390 90 L 430 110 L 390 130 L 390 118 L 340 118 L 340 110 Z" fill="#fff2cc" stroke="#d6b656" stroke-miterlimit="10" pointer-events="all"/><path d="M 460 172 L 510 172 L 510 160 L 550 180 L 510 200 L 510 188 L 460 188 L 460 180 Z" fill="#fff2cc" stroke="#d6b656" stroke-miterlimit="10" pointer-events="all"/><path d="M 600 242 L 650 242 L 650 230 L 690 250 L 650 270 L 650 258 L 600 258 L 600 250 Z" fill="#fff2cc" stroke="#d6b656" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.drawio.com/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Text is not SVG - cannot display</text></a></switch></svg>


## Middleware Handel error (error, req, res, next)

# Export des modules

Ne pas oublier l'export des objects en fin de fichier module

commonJs
```
module.exports = router;
```

Emascript
```
export default demoRouter;
```
