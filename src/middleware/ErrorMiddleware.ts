import { Errback, NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";

export default (err:Errback,req:Request,res:Response,next:NextFunction)=>{
        if(err instanceof ApiError){
            return res.status(err.err).json(err.mess)
        }
    }
