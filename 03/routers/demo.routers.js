const demoController = require('./../controllers/demo.controller');
const express = require('express');
const demoRouter = express.Router();

// demoRouter.get('/', (req, res)  => {
//     res.json({
//         "message" : `Message -> ${MESSAGE}`
//     });
// });

// router.get('/:id', (req, res)  => {
//     res.json({
//         "message" : `Message avec ${id} -> ${MESSAGE}`
//     });
// });

demoRouter.get('/', demoController.getMessage);
demoRouter.get('/:id([0-9]+)', demoController.getMessageById);
demoRouter.get('/:name', demoController.getMessageByName);

module.exports = demoRouter;