// 23. Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" (ou outra letra de sua escolha).
/* const cidade = prompt("Digite o nome de sua cidade:");
const letraInicial = "S";
if (cidade?.startsWith(letraInicial)) {
  alert(`A cidade ${cidade} começa com a letra "${letraInicial}".`);
} else {
  alert(`A cidade ${cidade} não começa com a letra "${letraInicial}".`);
}
 */

// 24. Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.

/* const numDecimal = parseFloat(prompt("Digite um número decimal:")!);
const numDecimal2 = parseFloat(prompt("Digite outro número decimal:")!);
const resto = numDecimal % numDecimal2;

alert(`O resto da divisão de ${numDecimal} por ${numDecimal2} é ${resto}.`); */

// 25. Solicite ao usuário um número decimal e converta-o em um número inteiro.

/* const numDecimal = parseFloat(prompt("Digite um número decimal:")!);

const numInteiro = Math.trunc(numDecimal);
alert(`O número ${numDecimal} convertido para inteiro é ${numInteiro}.`);
 */

// 26. Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o  novamente para uma string antes de exibi-lo.

/* const num = parseInt(prompt("Digite um número inteiro:")!);
const numSoma = (num + 10).toString();
alert(`O número ${num} somado a 10 é ${numSoma}.`);
 */

// 27. Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano separadamente, convertendo-os em números inteiros.

/* const data = prompt("Digite uma data no formato dd/mm/aaaa:");
const [dia, mes, ano] = data.split("/").map((part) => Number(part));

alert(`Dia: ${dia}, Mês: ${mes}, Ano: ${ano}`);
 */

// 28. Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar umamensagem completa, como "Você mora em [cidade], [estado].".

/* const nomeCidade = prompt("Digite o nome de sua cidade: ");
const nomeEstado = prompt("Digite o nome do seu estado: ");

alert(`Você mora em ${nomeCidade}, ${nomeEstado}.`); */

// 29. Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".

/* const anoNasci = prompt("Digite o ano de seu nascimento: ");

alert(`Bem-vindo ao nosso programa, nascido em ${anoNasci}!`); */

// 30. Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única string, separando-os com um espaço.
/* const num = Number(prompt("Digite um número inteiro:"));
const str = prompt("Digite uma string:");

alert(`${num}` + " " + `${str}`); */

// 31. Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto, adicionando o símbolo de moeda da sua escolha.

/* const produto = prompt("Digite o nome do produto:");
alert(`O produto ${produto} custa R$100.`); */

// 32. Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.

/* const numInt = Number(prompt("Digite um número inteiro:"));
alert(`O dobro de ${numInt} é ${numInt * 2}.`); */

// 33. Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.

/* const email = prompt("Digite seu e-mail:");
alert(`Obrigado, ${email}!`); */

// 34. Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente (divisão inteira) entre eles.

/* const num = Number(prompt("Digite um número inteiro:"));
const num2 = Number(prompt("Digite outro número inteiro:"));

const soma = num + num2;
const diferenca = num - num2;
const produto = num * num2;
const quociente = Math.floor(num / num2);

alert(`Números digitados: ${num} e ${num2}
Soma: ${soma}
Diferença: ${diferenca}
Produto: ${produto}
Quociente: ${quociente}`);
 */

// 35. Peça ao usuário para digitar a base e a altura de um triângulo. Em seguida, calcule e exiba a área do triângulo.

/* const baseTriangulo = parseFloat(prompt("Digite a base do triângulo:")!);
const alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo:")!);
const area = (baseTriangulo * alturaTriangulo) / 2;

alert(`A área do triângulo é ${area}.`); */

// 36. Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).

/* const raio = Number(prompt("Digite o raio da circunferência:"));

const perimetro = 2 * Math.PI * raio;

alert(`O Resultado do perímetro é: ${perimetro.toFixed(3)}`); */

// 37. Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o perímetro do retângulo.

/* const baseRetangulo = Number(prompt("Digite a base do retângulo:"));
const alturaRetangulo = Number(prompt("Digite a altura do retângulo:"));
const perimetro = 2 * (baseRetangulo + alturaRetangulo);
alert(`O perímetro do retângulo é ${perimetro}.`); */

// 38. Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média aritmética desses números.

/* const numDecimals: number[] = [];
for (let i = 0; i < 3; i++) {
  const input: string | null = prompt(`Digite o ${i + 1}º número decimal:`);
  if (input !== null) {
    const num: number = parseFloat(input);
    numDecimals.push(num);
  }
}

const mediaAritmetica: number =
  numDecimals.reduce((acc, curr) => acc + curr, 0) / numDecimals.length;

alert(
  `A média aritmética dos números ${numDecimals.join(
    ", "
  )} é ${mediaAritmetica.toFixed(2)}.`
);
 */

// 39. Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já viveu (considerando um ano com 365 dias).

/* const idade = Number(prompt("Digite sua idade:"));
const meses = idade * 12;
const dias = idade * 365;
alert(`Você já viveu ${meses} meses e ${dias} dias.`); */

// 40. Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor para dólares e exiba o resultado.

/* const valorReais: string | null = prompt("Digite um valor em reais:");
const cotacaoDolar: string | null = prompt("Digite a cotação do dólar:");
const valorDolar = parseFloat(valorReais) / parseFloat(cotacaoDolar);

alert(`O valor digitado em reais fica ${valorDolar.toFixed(3)} dolar`);
 */

// 41. Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.

/* const numDecimal = parseFloat(prompt("Digite um número decimal:")!);

const numArredondado = Math.round(numDecimal);

alert(
  `O número ${numDecimal} arredondado para o inteiro mais próximo é ${numArredondado}.`
);
 */

// 42. Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.

/* const numInt = Number(prompt("Digite o primeiro número inteiro:"));
const numInt2 = Number(prompt("Digite o segundo número inteiro:"));
const numInt3 = Number(prompt("Digite o terceiro número inteiro:")); */

/* const nums: number[] = [];

for (let i = 0; i < 3; i++) {
  const input = Number(prompt(`Digite o ${i + 1} número inteiro:`));
  if (input !== null) {
    nums.push(input);
  }
}

alert((nums[0] + nums[1]) * nums[2]); */

// 43. Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando a fórmula: Fahrenheit = (Celsius * 9/5) + 32.

const temp = Number(prompt("Digite a temperatura em graus Celsius:"));

const tempFahrenheit = temp * (9 / 5) + 32;

alert(`A temperatura em graus Fahrenheit é ${tempFahrenheit.toFixed(1)}.`);
