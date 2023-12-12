//Config API
import express from "express";
import cors from "cors"
const app = express()

//Config JSON response
app.use(express.json())

//CORS 
app.use(cors())

//Routes
import PdfRouter from "./routes/PdfRouter.js"
app.use('/pdf', PdfRouter)

//Server
app.listen(3000, () => { console.log("Servidor rodando na porta 3000") })