import { NextFunction, Request, Response } from "express";
import ApiError from "../error/ApiError";

export class EmployerControllers{
    static getAll(req:Request, res:Response, next:NextFunction){
        try{
            return next(ApiError.badData())
        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static getEmployer(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static postEmployer(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static putEmployer(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static delEmployer(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static uploadImg(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }

    static updateImg(req:Request, res:Response, next:NextFunction){
        try{

        }catch(err){
            console.log(err)
            return next(ApiError.serverError())
        }
    }
}