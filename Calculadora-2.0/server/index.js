const express = require('express');
const cors = require('cors');
const { somar, subtrair, multiplicar, dividir } = require('../operacoes');

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function calcular(operacao, n1, n2) {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    switch (operacao) {
        case 'soma': return { resultado: somar(n1, n2) };
        case 'subtracao': return { resultado: subtrair(n1, n2) };
        case 'multiplicacao': return { resultado: multiplicar(n1, n2) };
        case 'divisao':
            if (n2 === 0) return { erro: "Divisão por zero não permitida." };
            return { resultado: dividir(n1, n2) };
        default: return { erro: "Operação inválida." };
    }
}

app.get('/calc', (req, res) => {
    const { opc, n1, n2 } = req.query;
    res.json(calcular(opc, n1, n2));
});

app.post('/calc', (req, res) => {
    const { opc, n1, n2 } = req.body;
    res.json(calcular(opc, n1, n2));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
