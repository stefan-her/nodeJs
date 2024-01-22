// import express from "express";
// const { Request, Response } = express;

const { Request, Response } = import("express");

export default guestController = {

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
    getAll: (req, res) => {
        res.sendStatus(501);
    },

    /**
     * Add in the db a new guest
     * @param { Request } req 
     * @param { Response } res 
     */
    add: (req, res) => {
        res.sendStatus(501);
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