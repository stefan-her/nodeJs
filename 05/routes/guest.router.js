import {Router} from 'express';
import guestController from '../controllers/guest.controller.js';

const guestRouter = Router({});

/**
 * Si on veut mettre de la doc swagger 
 * Afin de ne pas être en conflit avec la js doc
 * on peut l'écrire ici pour documenter les routes 
 */

guestRouter.route('/')
    .get(guestController.getAll)
    .post(guestController.add)
    .all((req, res) => res.sendStatus(405));

guestRouter.route('/:id([0-9]+)')
    .get(guestController.getById)
    .put(guestController.update)
    .delete(guestController.delete)
    .all((req, res) => res.sendStatus(405));

export default guestRouter