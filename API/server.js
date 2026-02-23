// server.js
import express from "express";
import receitasRoutes from "./src/routes/receitas.route.js";
import cors from 'cors'

const app = express();
const PORT = 3001;

app.use(cors())

app.use(express.json());
app.use("/api/receitas", receitasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

