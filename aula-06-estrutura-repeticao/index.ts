// 1. Enumere as diferenças entre os comandos "for" e "while".
// for: executa uma sequência de comandos repetidamente até que uma condição seja satisfeita.
// while: executa uma sequência de comandos repetidamente até que uma condição seja falsa.

// 2. Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
// for: quando você precisa iterar sobre um conjunto de dados.
// while: quando você precisa iterar sobre um conjunto de dados e você precisa saber quando o processo acabou.

// 6. Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
/* let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
} */

// 7. Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
/* let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
} */
// 8. Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.

/* let soma = 0;
let i = 1;
while (i <= 100) {
  soma += i;
  i++;
}
console.log("A soma dos números de 1 a 100 é:", soma); */

// 9. Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.

/* let produto = 1;
let i = 1;
while (i <= 5) {
  produto *= i;
  i++;
} */

// 10. Crie um programa que exiba a tabuada do 9 utilizando o while.

/* const numero = 9;
let i = 1;
while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}
 */

// 11. Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let maior = -Infinity;
let menor = Infinity;
let i = 0;
while (i < 10) {
  let numero = Number(prompt(`Digite o ${i + 1}º número:`));
  if (numero > maior) {
    maior = numero;
  }
  if (numero < menor) {
    menor = numero;
  }
  i++;
} */

// 12. Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados. O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while.

/* let soma = 0;
 let quantidade = 0;
 let i = 0;
 while (i < 10) {
   let numero = Number(prompt(`Digite o ${i + 1}º número:`));
   if (numero > -1) {
     quantidade++;
     soma += numero;
   }
   i++;
 }
 let media = soma / quantidade;
 console.log("A média dos números digitados é:", media); */

// 13. Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.
/* let numero = prompt("Digite um número inteiro:");
let soma = 0;
let i = 0;

if (numero != null) {
  while (i < numero.length) {
    let digito = parseInt(numero.charAt(i)); 
    soma += Math.pow(digito, 3); 
    i++; 
  }
}

console.log("A soma dos dígitos elevados ao cubo é:", soma);
 */

// 14. Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.

/* let i = 1;
while (i <= 100) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i++;
} */

//15. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while.
/* let i = 1;
while (i <= 50) {
  if (i % 3 === 0) {
    console.log(i);
  }
  i++;
} */

// 16. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7) utilizando o while.
/* let aprovados = 0;
const quantidadeNotas = 5;
let i = 0;
const notas = [];
while (i < quantidadeNotas) {
  let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));
  if (nota >= 7) {
    aprovados++;
  }
  notas.push(nota);
  i++;
}
console.log(`Os alunos aprovados foram: ${aprovados}`); */

// 17. Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados antes do primeiro número ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let pares = 0;
let encontrouImpar = false;

while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));

  if (numero === 0) {
    break; 
  }

  if (numero % 2 !== 0) {
    encontrouImpar = true; 
  } else if (!encontrouImpar) {
    pares++; 
  }
}

console.log(`Quantos números pares foram digitados antes do primeiro número ímpar: ${pares}`); */

// 18. Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares foram digitados. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let pares = 0;
let impares = 0;
while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero % 2 !== 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log(`Quantos números pares foram digitados: ${pares}`);
console.log(`Quantos números ímpares foram digitados: ${impares}`);
 */

// 19. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são divisíveis por 2, quantos são divisíveis por 3 e quantos são divisíveis por 5. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let divisores2 = 0;
let divisores3 = 0;
let divisores5 = 0;
while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero % 2 === 0) {
    divisores2++;
  }
  if (numero % 3 === 0) {
    divisores3++;
  }
  if (numero % 5 === 0) {
    divisores5++;
  }
}
console.log(`Quantos números são divisíveis por 2: ${divisores2}`);
console.log(`Quantos números são divisíveis por 3: ${divisores3}`);
console.log(`Quantos números são divisíveis por 5: ${divisores5}`); */

// 20. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números divisíveis por 3. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let soma = 0;
let contador = 0;
while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero % 3 === 0) {
    soma += numero;
    contador++;
  }
}

let media = contador > 0 ? soma / contador : 0;
console.log(`A média dos números divisíveis por 3 é: ${media}`);
 */

// 21. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números possuem mais de três dígitos. O programa deve parar de ler quando o usuário digitar onúmero 0 utilizando o while.

/* let contador = 0;
while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero.toString().length > 3) {
    contador++;
  }
}

console.log(`Quantos números possuem mais de três dígitos: ${contador}`);
 */

// 22. Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let soma = 0;
let contador = 0;
while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero >= 50 && numero <= 100) {
    soma += numero;
    contador++;
  }
}
let media = soma / contador;

console.log(`A média dos números entre 50 e 100 é: ${media}`); */

// 23. Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

/* let menor = Infinity;

while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero > 0 && numero % 2 === 1) {
    if (numero < menor) {
      menor = numero;
    }
  }
}

console.log(`O menor valor positivo ímpar digitado foi: ${menor}`); */

// 24. Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são pares e quantos números são ímpares entre o primeiro e o último número digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let pares = 0;
let impares = 0;
let primeiroNumero = Infinity;
let ultimoNumero = -Infinity;

while (true) {
  let numero = Number(prompt("Digite um número inteiro (0 para parar):"));
  if (numero === 0) {
    break;
  }
  if (numero > ultimoNumero) {
    ultimoNumero = numero;
  }
  if (numero < primeiroNumero) {
    primeiroNumero = numero;
  }
  if (numero % 2 !== 0) {
    pares++;
  } else {
    impares++;
  }
}
console.log(
  `Quantos números são pares entre o primeiro e o último número digitado: ${pares}`
);
console.log(
  `Quantos números são ímpares entre o primeiro e o último número digitado: ${impares}`
);
