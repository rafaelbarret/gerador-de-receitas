// src/routes/receitas.route.js
import { Router } from "express";
import { perguntarReceita } from "../controllers/receitas.controller.js";

const router = Router();

router.post("/perguntar", perguntarReceita);

export default router;
