// Backend - server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/calcular", async (req, res) => {
    const { firstOperand, secondOperand, operador } = req.body;
    let result;

    switch (operador) {
        case "+":
            result = firstOperand + secondOperand;
            break;
        case "-":
            result = firstOperand - secondOperand;
            break;
        case "*":
            result = firstOperand * secondOperand;
            break;
        case "/":
            result = secondOperand !== 0 ? firstOperand / secondOperand : "Erro";
            break;
        default:
            return res.status(400).json({ error: "Operador inválido" });
    }

    res.json({ result });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
