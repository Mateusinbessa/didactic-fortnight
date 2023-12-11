//Config API
import express from "express";
import cors from "cors"
const app = express()

//Config JSON response
app.use(express.json())

//CORS 
app.use(cors({credentials: true, origin:'http://127.0.0.1:5173'}))

//Routes
import PdfRouter from "./routes/PdfRouter.js"
app.use('/pdf', PdfRouter)

app.listen(3000, () => {console.log("Servidor rodando na porta 3000")})