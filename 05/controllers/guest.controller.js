const { Request, Response } = import("express");
import GuestService from '../services/guest.services.js';
const guestService = new GuestService();

export default {

    /**
     * Get guest information selected by id
     * @param { Request } req 
     * @param { Response } res 
     */
    getById: (req, res) => {
        res.sendStatus(501);
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
    delete: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Update in the db the information form a guest selected by id
     * @param { Request } req 
     * @param { Response } res 
     */
    update: (req, res) => {
        res.sendStatus(501);
    },
}