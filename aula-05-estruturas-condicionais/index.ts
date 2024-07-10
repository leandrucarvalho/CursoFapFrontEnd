// const num = prompt("Digite um número: ");
// const numeroDigitadoElement = document.getElementById("numeroDigitado");

// /* if (num === null) {
//   numeroDigitadoElement.textContent = "Digite uma informação válida";
// } else {
//   if (numeroDigitadoElement !== null) {
//     numeroDigitadoElement.textContent = `O número digitado foi: ${num}`;
//   }
// } */

// if (num !== null) {
//   alert("Informação VÁLIDA");
// } else {
//   alert("Informação INVÁLIDA");
// }

const altura1 = Number(prompt("Digite sua altura: "));
const peso1 = Number(prompt("Digite sua peso: "));

const imc1 = peso1 / altura1 ** 2;

// alert(imc1.toFixed(2));

if (imc1 < 18.5) {
  alert("Abaixo do peso normal");
} else if (imc1 >= 18.5 && imc1 < 24.9) {
  alert("Peso normal");
} else if (imc1 >= 24.9) {
  alert("Excesso de peso");
} else {
  alert("Categoria não encontrada");
}
