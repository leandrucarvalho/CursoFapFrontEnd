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
