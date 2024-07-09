// Questão 05

// const nomePerson = prompt("Digite seu nome:");
// alert(nomePerson);

// Questão 06

// const idadePerson2 = prompt("Digite sua idade");

// let idadeConvertida2 = Number(idadePerson2);

// alert(idadeConvertida2);

// Questão 7

// const numInt = prompt("Digite um número inteiro");
// let result = parseFloat(numInt);

// alert(result);

// Questão 8

// const num1 = Number(prompt("Digite um número inteiro: "));
// const num2 = Number(prompt("Digite o segundo número: "));

// const resultSoma = num1 + num2;

// alert(resultSoma);

// Questão 9

// const numDecimal = parseFloat(prompt("digite um número decimal"));

// const resultDecimal = numDecimal ** 2;

// alert(resultDecimal.toFixed(2));

// Questão 10

// const anoNasc = Number(prompt("Digite o ano do seu nascimento: "));

// let anoAtual = new Date();

// let idade = anoAtual.getFullYear() - anoNasc;

// alert(idade);

// Questão 11

// const primeiroNome = prompt("Digite seu primeiro nome: ");

// const segundoNome = prompt("Digite seu segundo nome: ");

// alert(primeiroNome + " " + segundoNome);

// Questão 12 Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados.

/* const quantidadeNumeros = prompt(
  "Digite uma sequência de números separados por espaço:"
);
if (quantidadeNumeros) {
  alert(`Você digitou ${quantidadeNumeros.split(" ").length} números.`);
} */

// Questão 13 Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado.

/* const animalDigitado = prompt("Digite o nome de algum animal: ");

alert(`O animal digitado foi: ${animalDigitado}`); */

// Questão 14 Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome).

/* const nomeSobrenome = prompt("Digite seu nome e sobrenome: ");

const nomeSobrenomeInvertido = nomeSobrenome?.split(" ").reverse().join(" ");
alert(nomeSobrenomeInvertido); */

// 15. Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres).

/* const stringDigitada = prompt("Digite um texto qualquer: ");

alert(`O texto digitado tem ${stringDigitada?.length} caracteres`); */

// 16. Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar.

/* const numInt = Number(prompt("Digite um número inteiro: "));
const result = numInt % 2;

if (result === 0) {
  alert(`O número ${numInt} é par`);
} else {
  alert(`O número ${numInt} é ímpar`);
} */

// 17. Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo.
/* const numInt = Number(prompt("Digite um número inteiro: "));
if (numInt > 0) {
  alert(`O número ${numInt} é positivo`);
} else if (numInt < 0) {
  alert(`O número ${numInt} é negativo`);
} else {
  alert("O número digitado é zero");
} */

// 18. Peça ao usuário que insira dois números e exiba o maior deles.

/* const numMaior = Number(prompt("Digite um número: "));
const numMenor = Number(prompt("Digite outro número: "));
const result = numMaior > numMenor;

alert(`O número ${result ? numMaior : numMenor} é o maior`); */

// 19. Receba a altura e o peso de uma pessoa digitados pelo usuário. Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado.

/* const altura = Number(prompt("Digite sua altura em metros: "));
const peso = Number(prompt("Digite seu peso em quilos: "));
const imc = peso / (altura * altura);

alert(`Seu IMC é ${imc.toFixed(2)}`); */

// 20. Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.

/* const namePerson = prompt("Digite seu nome: ");
const result = namePerson?.length > 5;

alert(
  `O nome ${namePerson} possui mais de 5 caracteres? ${
    result === true ? "Sim" : "Não"
  }`
); */

// 21. Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada (por exemplo:"Você é casado(a)", "Você é solteiro(a)", etc.).

/* const estadoCivil = prompt(
  "Digite seu estado civil (solteiro, casado, divorciado ou viuvo): "
);

alert(`Você é ${estadoCivil}(a)`); */

// 22. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e exiba o resultado.

/* const base = Number(prompt("Digite a base do retângulo: "));
const altura = Number(prompt("Digite a altura do retângulo: "));

const result = base * altura;

alert(`A área do retângulo é: ${result}`); */
