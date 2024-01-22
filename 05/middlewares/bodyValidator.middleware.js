import { Schema } from 'yup';
import express  from 'express';
const { Request, Response, NextFunction } = express;
/**
 * 
 * @param { Schema } yupValidator 
 * @param { number } errorCode 
 * @returns { (req : Request, res : Response, next : NextFunction ) => void }
 */
export const bodyValidatorMiddleware = (yupValidator, errorCode = 422) => {

    return (req, res, next) => {
        yupValidator.noUnknown().validate(req.body, {
            abortEarly: false
        })
        .then((data) => {
            req.bodyValidated = data;
            next();
        })
        .catch((error) => {
            console.error(`Body validator ${error}`);
            res.status(errorCode).json({
                message : "Invalid data",
                errors : []
            });
        });
    };

};