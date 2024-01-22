const { Request, Response } = import("express");
import GuestService from '../services/guest.services.js';
const guestService = new GuestService();

export default {

    /**
     * Get guest information selected by id
     * @param { Request } req 
     * @param { Response } res 
     */
    getById: async (req, res) => {
        const data = await guestService.getById(req.params.id);
        if(!data) return res.status(201);
        res.status(200).json(data);
    },

    /**
     * Get all guests from the db 
     * @param { Request } req 
     * @param { Response } res 
     */
    getAll: async (req, res) => {
        const data = await guestService.getAll();
        res.status(200).json(data);
    },

    /**
     * Add in the db a new guest
     * @param { Request } req 
     * @param { Response } res 
     */
    add: async (req, res) => {
        const data = await guestService.add(req.body)
        res.status(201);
        res.location('guest/' + data.id);
        res.json(data);
    },

    /**
     * Delete in the db a guest selected by id
     * @param { Request } req 
     * @param { Response } res 
     */
    delete: async (req, res) => {
        const done = await guestService.delete(req.params.id);
        if(!done) return res.sendStatus(404);
        res.status(200).json(204);
    },

    /**
     * Update in the db the information form a guest selected by id
     * @param { Request } req 
     * @param { Response } res 
     */
    update: async (req, res) => {
        const [data] = await guestService.update(req.params, req.body)
        if(!data)  return res.status(201);
        res.status(200).json(data);
    },
}