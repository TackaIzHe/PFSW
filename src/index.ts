import express, { Errback, NextFunction, Request, Response } from "express"
import { DbContext } from "./database/db"
import indexRouters from './routers/index'
import path, { join } from "path"
import cookie_parser from 'cookie-parser'
import ErrorMiddleware from './middleware/ErrorMiddleware'
require('dotenv').config({path:'src/.env'})

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cookie_parser())

app.use(indexRouters);
app.use('/img', express.static(path.join(__dirname, './img')))

app.use(
    (err:Errback, req:Request,res:Response, next:NextFunction)=>{
        ErrorMiddleware(err,req,res,next)
    }
)

DbContext.initialize().then(()=>{

    app.listen(port,()=>{
        console.log(`server started on http://localhost:${port}`)
    })
}).catch((err)=>{
    console.log(err)
})
