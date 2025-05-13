const { somar, dividir, multiplicar, subtrair } = require('../operacoes.js')

test ('Primeiro Teste: Soma', () => {
    let adicao = 'somar';
    expect(somar(10,5)).toBe(15)
})

test ('Primeiro Teste: Subtrair', () => {
    let menos = 'subtrair';
    expect(subtrair(5,2)).toBe(3)
})

test ('Primeiro Teste: Multiplicacao', () => {
    let vezes = 'multiplicar';
    expect(multiplicar(6,10)).toBe(60)
})

test ('Primeiro Teste: Divisao', () => {
    let divisao = 'divisao';
    expect(dividir(50,10)).toBe(5)
})
