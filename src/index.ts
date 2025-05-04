import express from "express"
require('dotenv').config({path:'src/.env'})

const app = express()
const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})