// src/controllers/receitas.controller.js
import { obterRespostaReceita } from "../services/gemini.service.js";

export const perguntarReceita = async (req, res) => {
  const { pergunta } = req.body;

  if (!pergunta) {
    return res.status(400).json({ erro: "Envie uma pergunta no body." });
  }

  try {
    const resposta = await obterRespostaReceita(pergunta);
    res.json({ resposta });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao gerar receita." });
  }
};