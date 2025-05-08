import { NextFunction, Request, Response, Router } from "express";
import { EmployerControllers } from "../controllers/EmployerControllers";

const router = Router()

router.get('/',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.getAll(req,res,next)
})

router.get('/:id',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.getEmployer(req,res,next)
})

router.post('/',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.postEmployer(req,res,next)
})

router.put('/',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.putEmployer(req,res,next)
})

router.delete('/:id',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.delEmployer(req,res,next)
})

router.post('/img',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.uploadImg(req,res,next)
})

router.put('/img',(req:Request, res:Response,next:NextFunction)=>{
    EmployerControllers.updateImg(req,res,next)
})

export default router