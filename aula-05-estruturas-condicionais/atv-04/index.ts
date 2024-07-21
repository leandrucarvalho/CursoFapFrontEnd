// 1. Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.

/* let num = Number(prompt("Digite um número inteiro"));
if (num != null) {
  if (num > 0) {
    alert(`O número digitado "${num}" é positivo`);
  } else if (num < 0) {
    alert(`O número digitado "${num}" é negativo`);
  } else if (num === 0) {
    alert(`O número digitado "${num}" é igual a zero`);
  }
} */

// 2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
/* let idade = Number(prompt("Digite sua idade"));

if (idade != null) {
  if (idade >= 18) {
    alert(`Você tem ${idade} anos e é maior de idade`);
  } else {
    alert(`Você tem ${idade} anos e é menor de idade`);
  }
} */

// 3. Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
/* let num1 = Number(prompt("Digite um número inteiro"));
let num2 = Number(prompt("Digite outro número inteiro"));

if (num1 != null && num2 != null) {
  if (num1 > num2) {
    alert(`O número maior é ${num1}`);
  } else if (num2 > num1) {
    alert(`O número maior é ${num2}`);
  } else {
    alert(`Os números são iguais`);
  }
} */

// 4. Faça um programa que verifique se um número é par ou ímpar.

/* let num = Number(prompt("Digite um número inteiro"));

if (num != null) {
  if (num % 2 == 0) {
    alert(`O número ${num} é par`);
  } else {
    alert(`O número ${num} é ímpar`);
  }
} */

// 5. Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o aluno está aprovado (média maior ou igual a 7) ou reprovado.

/* let nota = Number(prompt("Digite a primeira nota"));
let nota2 = Number(prompt("Digite a segunda nota"));
let nota3 = Number(prompt("Digite a terceira nota"));

let media = (nota + nota2 + nota3) / 3;

if (media != null) {
  if (media >= 7) {
    alert(`O aluno está aprovado com média ${nota}`);
  } else {
    alert(`O aluno está reprovado com média ${nota}`);
  }
} */

// 6. Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número de caracteres em seu nome.

/* let nome1 = prompt("Digite o nome da primeira pessoa");
let nome2 = prompt("Digite o nome da segunda pessoa");

if (nome1 != null && nome2 != null) {
  if (nome1.length > nome2.length) {
    alert(`O nome com mais caracteres é ${nome1}`);
  } else if (nome2.length > nome1.length) {
    alert(`O nome com mais caracteres é ${nome2}`);
  } else {
    alert("Os nomes têm o mesmo número de caracteres");
  }
} */

// 7. Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.

/* let letra = prompt("Digite uma letra");

let vogais = ["a", "e", "i", "o", "u"];

if (letra != null) {
  if (vogais.indexOf(letra.toLowerCase()) !== -1) {
    alert(`A letra "${letra}" é uma vogal`);
  } else if (isNaN(Number(letra))) {
    alert(`A letra "${letra}" é uma consoante`);
  } else {
    alert("Digite uma letra válida");
  }
}
 */

// 8. Faça um programa que receba três números e os imprima em ordem crescente.

/* const numeros: number[] = [];

for (let index = 0; index < 3; index++) {
  const input: number | null = Number(prompt(`Digite o ${index + 1}º número`));
  if (input != null) {
    numeros.push(input);
  } else {
    alert("Digite um número válido");
    index--;
  }
}

numeros.sort((a, b) => a - b);

alert(`Os números em ordem crescente são: ${numeros.join(", ")}`);
 */

// 9. Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,obesa ou muito obesa.

/* let pesoPerson = Number(prompt("Digite seu peso em kg"));
let alturaPerson = Number(prompt("Digite sua altura em metros"));

const imcResult = pesoPerson / (alturaPerson * alturaPerson);

if (imcResult < 18.5) {
  alert("Abaixo do peso normal");
} else if (imcResult >= 18.5 && imcResult < 24.9) {
  alert("Peso normal");
} else if (imcResult >= 24.9) {
  alert("sobrepeso");
} else if (imcResult >= 30 && imcResult < 34.9) {
  alert("Obesidade");
} else {
  alert("Muito obesa");
} */

// 10. Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.

/* let numMonth = Number(prompt("Digite um número de 1 a 12"));

switch (numMonth) {
  case 1:
    alert("Janeiro");
    break;
  case 2:
    alert("Fevereiro");
    break;
  case 3:
    alert("Março");
    break;
  case 4:
    alert("Abril");
    break;
  case 5:
    alert("Maio");
    break;
  case 6:
    alert("Junho");
    break;
  case 7:
    alert("Julho");
    break;
  case 8:
    alert("Agosto");
    break;
  case 9:
    alert("Setembro");
    break;
  case 10:
    alert("Outubro");
    break;
  case 11:
    alert("Novembro");
    break;
  case 12:
    alert("Dezembro");
  default:
    alert("Digite um número válido");
    break;
}
 */

// 11. Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.

/* let salary = Number(prompt("Digite seu salário"));

if (salary != null) {
  if (salary > 1500) {
    salary = salary + (salary * 10) / 100;
    alert(`Seu salário com aumento é de R$ ${salary}`);
  } else {
    salary = salary + (salary * 15) / 100;
    alert(`Seu salário com aumento é de R$ ${salary}`);
  }
} */

// 12. Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo, exibindo uma mensagem apropriada.

/* let numInt = Number(prompt("Digite um número inteiro"));

if (numInt % 3 === 0 && numInt % 5 === 0) {
  alert(`O número ${numInt} é divisível por 3 e por 5`);
} else {
  alert(`O número ${numInt} não é divisível por 3 e por 5`);
}
 */

// 13. Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem informando se é um dia útil ou um fim de semana.

/* let dayWeek = prompt("Digite o dia da semana. Ex.: segunda feira");

if (dayWeek != null) {
  switch (dayWeek.toLowerCase()) {
    case "segunda feira":
    case "terça feira":
    case "quarta feira":
    case "quinta feira":
    case "sexta feira":
      alert("É um dia útil");
      break;
    case "sábado":
    case "domingo":
      alert("É um fim de semana");
      break;
    default:
      alert("Digite um dia válido");
      break;
  }
} */

// 14. Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom","Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando switch/case.

/* let numInt = Number(prompt("Digite um número inteiro de 1 a 5"));

switch (numInt) {
  case 1:
    alert("Muito bom");
    break;
  case 2:
    alert("Bom");
    break;
  case 3:
    alert("Regular");
    break;
  case 4:
    alert("Insuficiente");
    break;
  case 5:
    alert("Muito insuficiente");
    break;
  default:
    alert("Digite um número válido");
    break;
} */

// 15. Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente (1 -Domingo, 2 - Segunda-feira, etc.).

/* let numWeek = Number(prompt("Digite um número de 1 a 7"));

switch (numWeek) {
  case 1:
    alert("Domingo");
    break;
  case 2:
    alert("Segunda-feira");
    break;
  case 3:
    alert("Terça-feira");
    break;
  case 4:
    alert("Quarta-feira");
    break;
  case 5:
    alert("Quinta-feira");
    break;
  case 6:
    alert("Sexta-feira");
    break;
  case 7:
    alert("Sábado");
    break;
  default:
    alert("Digite um número válido");
    break;
}
 */

// 16. Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a estrutura de controle try/catch para tratar exceções.

/* try {
  const input: string | null = prompt("Digite um número decimal:");
  if (input !== null) {
    const num: number = parseFloat(input);
    if (isNaN(num)) {
      throw new Error("Por favor, insira um número válido.");
    }
    const roundedNum: number = Math.round(num);
    alert(`O número arredondado é: ${roundedNum}`);
  } else {
    throw new Error("Nenhuma entrada fornecida.");
  }
} catch (error) {
  if (error instanceof Error) {
    alert(`Erro: ${error.message}`);
  } else {
    alert("Ocorreu um erro inesperado.");
  }
}
 */

// 17. Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).

/* let age = Number(prompt("Digite sua idade"));

if (age >= 0 && age <= 1) {
  alert("Você é um bebê");
} else if (age >= 2 && age <= 12) {
  alert("Você é uma criança");
} else if (age >= 13 && age <= 18) {
  alert("Você é um adolescente");
} else if (age > 18) {
  alert("Você é um adulto");
} else {
  alert("Digite uma idade válida");
}
 */

// 18. Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma mensagem informando se é solteiro, casado, divorciado ou viúvo.
/* const estadoCivil: string | null = prompt(
  "Digite seu estado civil (solteiro, casado, divorciado, viúvo):"
);

if (estadoCivil !== null) {
  switch (estadoCivil.toLowerCase()) {
    case "solteiro":
      alert("Você é solteiro.");
      break;
    case "casado":
      alert("Você é casado.");
      break;
    case "divorciado":
      alert("Você é divorciado.");
      break;
    case "viúvo":
      alert("Você é viúvo.");
      break;
    default:
      alert("Estado civil não reconhecido.");
      break;
  }
} else {
  alert("Nenhuma entrada fornecida.");
}
 */

// 19. Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).

/* let numInt = Number(prompt("Digite um número inteiro"));
let numInt2 = Number(prompt("Digite outro número inteiro"));

let operacao = Number(
  prompt(
    "Escolha uma operação:\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"
  )
);
switch (operacao) {
  case 1:
    alert(`A soma é ${numInt + numInt2}`);
    break;
  case 2:
    alert(`A subtração é ${numInt - numInt2}`);
    break;
  case 3:
    alert(`A multiplicação é ${numInt * numInt2}`);
    break;
  case 4:
    alert(`A divisão é ${numInt / numInt2}`);
    break;
  default:
    alert("Digite uma operação válida");
    break;
}
 */

// 20. Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para garantir que a idade digitada seja um valor inteiro válido.

/* let namePerson1 = prompt("Digite seu nome");
let agePerson = Number(prompt("Digite sua idade"));

try {
  if (isNaN(agePerson)) {
    throw new Error("Idade inválida. Digite um número inteiro.");
  } else {
    alert(`Seu nome é ${namePerson1} e sua idade é ${agePerson}`);
  }
} catch (error) {
  if (error instanceof Error) {
    alert(`Erro: ${error.message}`);
  } else {
    alert("Ocorreu um erro inesperado.");
  }
}
 */

// 21. Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.

/* let inputMeters = Number(prompt("Digite um valor em metros"));

try {
  if (isNaN(inputMeters)) {
    throw new Error("Valor inválido. Digite um número.");
  } else {
    const centimeters = inputMeters * 100;
    const millimeters = inputMeters * 1000;
    const kilometers = inputMeters / 1000;

    alert(
      `O valor em centímetros é ${centimeters}, em milímetros é ${millimeters} e em quilômetros é ${kilometers}`
    );
  }
} catch (error) {
  if (error instanceof Error) {
    alert(`Erro: ${error.message}`);
  } else {
    alert("Ocorreu um erro inesperado.");
  }
}
 */
