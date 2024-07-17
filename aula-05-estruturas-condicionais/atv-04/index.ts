// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.

let num = Number(prompt("Digite um número inteiro"));
if (num != null) {
  if (num > 0) {
    alert(`O número digitado "${num}" é positivo`);
  } else if (num < 0) {
    alert(`O número digitado "${num}" é negativo`);
  } else if (num === 0) {
    alert(`O número digitado "${num}" é igual a zero`);
  }
}
