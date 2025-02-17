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

function calcular() {
    if (operador == null || firstOperand == null) return;
    let secondOperand = parseFloat(numeroAtual.replace(",", "."));
    let resultValue;

    switch (operador) {
        case "+":
            resultValue = firstOperand + secondOperand;
            break;
        case "-":
            resultValue = firstOperand - secondOperand;
            break;
        case "*":
            resultValue = firstOperand * secondOperand;
            break;
        case "/":
            resultValue = firstOperand / secondOperand;
            break;
        default:
            return;
        
        }

        if (resultValue.toString().split(".")[1]?.length > 5) {
            numeroAtual = parseFloat(resultValue.toFixed(5)).toString();    
        } else {
            numeroAtual = resultValue.toString();
        }
    

    operador = null;
    firstOperand = null;
    restart = true;
    percentageValue = null;
    updateResult();
}

function setPercentage() {
    let result = parseFloat(numeroAtual) / 100;

    if (["+", "-"].includes(operador)) {
        result = result * (firstOperand || 1);
    }

    if (result.toString().split(".")[1]?.length > 5) {
        result = result.toFixed(5).toString();
    }    

    numeroAtual = result.toString();
    updateResult();
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
