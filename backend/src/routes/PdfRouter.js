import { Router } from "express";
const router = Router()

import { create } from "../controller/PdfController.js";

router.post('/create', create)

export default router