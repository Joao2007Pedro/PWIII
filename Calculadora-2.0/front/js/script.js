const btn_calcular = document.querySelector("#btn_calcular");

async function obterOperacoes() {
    return ['soma', 'subtracao', 'multiplicacao', 'divisao'];
}

async function calcular() {
    const opc = document.querySelector('.opc').value;
    const n1 = parseFloat(document.querySelector('.n1').value);
    const n2 = parseFloat(document.querySelector('.n2').value);

    const operacoes = await obterOperacoes();

    let resultado;
    switch (opc) {
        case 'soma': resultado = n1 + n2; break;
        case 'subtracao': resultado = n1 - n2; break;
        case 'multiplicacao': resultado = n1 * n2; break;
        case 'divisao': resultado = n1 / n2; break;
    }

    alert(`Resultado: ${resultado}`);
}

btn_calcular.addEventListener('click', calcular);
