import { getMessage, getMessageById, getMessageByName, getDanger } from './../controllers/demo.controller.js';
import { Router } from 'express';
const demoRouter = Router();


// route avec middelware(s) avant l'execution de la methode lié  à la route
// demoRouter.get('/', middelware(s), getMessage);

demoRouter.get('/danger', getDanger);

demoRouter.get('/', getMessage);
demoRouter.get('/:id([0-9]+)', getMessageById);
demoRouter.get('/:name', getMessageByName);


export default demoRouter;