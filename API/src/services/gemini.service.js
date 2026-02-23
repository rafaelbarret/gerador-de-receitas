import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("API Key não encontrada. Verifique seu arquivo .env");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function obterRespostaReceita(pergunta) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const result = await model.generateContent([
      `Você é um assistente culinário especializado em ajudar pessoas leigas a cozinharem receitas deliciosas com base em um ingrediente informado pelo usuário.
Responda sempre em português brasileiro, com linguagem clara, amigável e fácil de entender, como se estivesse explicando para alguém que está começando a cozinhar.

Siga estas instruções de formatação obrigatórias:
- Use quebra de linha entre as seções (nome da receita, ingredientes, modo de preparo, dicas, etc.)
- Apresente os ingredientes em lista, com um item por linha
- Divida o modo de preparo em passos numerados, simples e objetivos
- Insira espaçamento entre parágrafos diferentes, para tornar a leitura mais confortável

Pergunta do usuário: ${pergunta}`
    ]);

    return result.response.text();
  } catch (err) {
    console.error("Erro ao chamar API Gemini:", err);
    throw new Error("Erro ao chamar API Gemini");
  }
}
