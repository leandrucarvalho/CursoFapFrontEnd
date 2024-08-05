// 1. Descreva para que serve o comando "for".
/* A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência. */
// 2. Como o comando "for" define o início de uma repetição?
// através da expressão inicial.
// for ( [expressão inicial]; [expressão condicional]; [atualização da expressão inicial] ) {
// 	// um ou vários comandos a serem executados //
// 	declaração;
// }
// 3. Como o comando "for" determina o fim da execução?
// até a expressão condicional ser falsa.
// 4. Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
// quando a expressão condicional for true, ele intera +1 no index.
// 5. Implemente o código do slide de número 18.
/* for (let index = 0; index < 10 ; index++) {
  console.log(`Testando uma frase ${index}`);
} */
// 6. Implemente o código do slide de número 26.
/* for(let i = 0; i < 10; i++){
  console.log(i)
} */
// 7. Implemente o código do slide de número 36.
/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
} */
// 8. Implemente o código do slide de número 38.
/* for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
} */
// 9. Implemente o código do slide de número 44.
/* let nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];

for (let n of nomes) {
  console.log(n);
} */
// 10. Faça um programa que exiba os números de 1 a 10 em ordem crescente.
/* for (let n = 0; n < 11; n++) {
  if (n >= 1) {
    console.log(n);
  }
} */
//11. Crie um programa que exiba os números de 10 a 1 em ordem decrescente.
/* for (let n = 10; n > 0; n--) {
  console.log(n);
} */
// 12. Elabore um programa que calcule a soma dos números de 1 a 100.
/* let soma = 0;

for (let i = 1; i <= 100; i++) {
  soma += i;
}

console.log("A soma dos números de 1 a 100 é:", soma);
 */
// 13. Desenvolva um programa que exiba todos os números pares de 1 a 50.
/* for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
 */
// 14. Faça um programa que calcule o produto dos números de 1 a 5.
/* let produto = 1;

for (let i = 1; i <= 5; i++) {
  produto *= i;
}

console.log("O produto dos números de 1 a 5 é:", produto);
 */
// 15. Crie um programa que exiba a tabuada do 7.
// const numero = 7;
// for (let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }
// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.
/* let soma = 0;
const quantidadeNotas = 5;

for (let i = 1; i <= quantidadeNotas; i++) {
  let nota = parseFloat(prompt(`Digite a nota ${i}:`));
  soma += nota;
}

let media = soma / quantidadeNotas;
console.log("A média das notas é:", media); */
// 17. Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.
/* for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
} */
// 18. Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.
/* let maior = -Infinity;
let menor = Infinity;

for (let i = 0; i < 10; i++) {
  let numero = Number(prompt(`Digite o ${i + 1}º número:`));

  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

console.log("O maior número digitado é:", maior);
console.log("O menor número digitado é:", menor); */
// 19. Faça um programa que exiba os números ímpares de 1 a 100.
/* for (let i = 1; i <= 100; i += 2) {
  console.log(i);
} */
// 20. Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).
/* let aprovados = 0;
const quantidadeNotas = 5;

for (let i = 0; i < quantidadeNotas; i++) {
  let nota = Number(prompt(`Digite a nota ${i + 1}:`));

  if (nota >= 7) {
    aprovados++;
  }
}

console.log(`Número de alunos aprovados: ${aprovados}`); */
// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.
/* let numero = prompt('Digite um número inteiro:');
numero = numero.replace(/\D/g, ''); 
let soma = 0;

for (let i = 0; i < numero.length; i++) {
    soma += parseInt(numero.charAt(i));
}

console.log('A soma dos dígitos é:', soma); */
// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores.
/* let numero = Number(prompt("Digite um número inteiro:"));

console.log(`Divisores de ${numero}:`);

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    console.log(i);
  }
}
 */
// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas.
/* let somaAltura = 0;
const quantidadePessoas = 5;

for (let i = 0; i < quantidadePessoas; i++) {
  let altura = Number(
    prompt(`Digite a altura da pessoa ${i + 1} (em metros):`)
  );
  somaAltura += altura;
}

let mediaAltura = somaAltura / quantidadePessoas;
console.log("A média de altura das 5 pessoas é:", mediaAltura.toFixed(2));  */
// 24. Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos, utilize a palavra "FizzBuzz".
/* for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
  } else if (i % 3 === 0) {
      console.log('Fizz');
  } else if (i % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(i);
  }
} */
// 25. Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.
/* let numero = prompt("Digite um número inteiro:");
numero = numero.replace(/\D/g, ""); // Remove qualquer caractere não numérico
let somaPares = 0;

for (let i = 0; i < numero.length; i++) {
  let digito = parseInt(numero.charAt(i));
  if (digito % 2 === 0) {
    somaPares += digito;
  }
}

console.log("A soma dos dígitos pares é:", somaPares); */
// 26. Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.
/* let numero = prompt("Digite um número inteiro:");
let numeroInvertido = numero.split("").reverse().join("");

console.log("O número invertido é:", numeroInvertido) */
