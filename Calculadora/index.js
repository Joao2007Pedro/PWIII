const result = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");

let numeroAtual = "";
let firstOperand = null;
let operador = null;
let restart = false;

function updateResult(originalClear = false) {
    result.innerText = originalClear ? 0 : numeroAtual.replace(".", ",");
}

function addDigit(digit) {
    if (digit == "," && (numeroAtual.includes(",") || !numeroAtual))
        return;

    if(restart) {
        numeroAtual = digit;
        restart = false;
    } else {
        numeroAtual += digit;
    }

    updateResult();
}

function setOperador(newOperador) {
    if (numeroAtual) {
        firstOperand = parseFloat(numeroAtual.replace(",", "."));
        numeroAtual = "";
    }

    operador = newOperador;
}

async function calcular() {
    if (operador == null || firstOperand == null) return;
    let secondOperand = parseFloat(numeroAtual.replace(",", "."));
    
    try {
        const response = await fetch("http://localhost:3000/calcular", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstOperand, secondOperand, operador })
        });
        const data = await response.json();
        
        numeroAtual = data.result.toString();
        operador = null;
        firstOperand = null;
        restart = true;
        updateResult();
    } catch (error) {
        console.error("Erro ao calcular:", error);
    }
}

function clearCalcular() {
    numeroAtual = "";
    firstOperand = null;
    operador = null;
    updateResult(true);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (/^[0-9]+$/.test(buttonText)) {
            addDigit(buttonText);
        } else if (["+", "-", "*", "/"].includes(buttonText)) {
            setOperador(buttonText);
        } else if (buttonText == "="){
            calcular();
        } else if (buttonText == "C"){
            clearCalcular();
        } else if (buttonText == "+/-") {
            if (numeroAtual) {
                numeroAtual = (parseFloat(numeroAtual.replace(",", ".")) * -1).toString().replace(".", ",");
                updateResult();
            }
        }
    });
});
