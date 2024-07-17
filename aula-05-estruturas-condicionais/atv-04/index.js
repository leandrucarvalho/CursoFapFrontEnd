// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
var num = Number(prompt("Digite um número inteiro"));
if (num != null) {
    if (num > 0) {
        alert("O n\u00FAmero digitado \"".concat(num, "\" \u00E9 positivo"));
    }
    else if (num < 0) {
        alert("O n\u00FAmero digitado \"".concat(num, "\" \u00E9 negativo"));
    }
    else if (num === 0) {
        alert("O n\u00FAmero digitado \"".concat(num, "\" \u00E9 igual a zero"));
    }
}
