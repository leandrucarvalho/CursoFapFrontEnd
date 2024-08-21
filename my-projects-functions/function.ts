// 5. Escreva uma função chamada "soma" que receba dois parâmetros (a e b) e retorne a soma deles.

export function sum(n1: number, n2: number) {
  return n1 + n2;
}

// 6. Crie uma função chamada "isPar" que receba um número inteiro como parâmetro e retorne "true" se o número for par ou "false" caso contrário.

export function isPar(n: number) {
  return n % 2 === 0;
}

// 7. Elabore uma função chamada "media" que receba três notas como parâmetros e retorne a média aritmética delas.

export function media(n1: number, n2: number, n3: number) {
  return (n1 + n2 + n3) / 3;
}

// 8. Elabore uma função chamada "imc" que receba o peso (em kg) e a altura (em metros) de uma pessoa e retorne o índice de massa corporal (IMC) dela.

export function imc(peso: number, altura: number) {
  return peso / (altura * altura);
}

// 9. Elabore uma função chamada "calcularDesconto" que receba o valor de um produto e o percentual de desconto como parâmetros e retorne o valor com o desconto aplicado.

export function calcularDesconto(valor: number, percentual: number) {
  return valor - (valor * percentual) / 100;
}

/* 10. Elabore uma função chamada "calcularImpostoRenda" que receba o salário bruto de uma pessoa
como parâmetro e retorne o valor do imposto de renda a ser pago, considerando as seguintes
faixas de renda:
a. Até R$ 1.903,98: isento
b. De R$ 1.903,99 até R$ 2.826,65: alíquota de 7,5%
c. De R$ 2 .826,66 até R$ 3.751,05: alíquota de 15%
d. De R$ 3.751,06 até R$ 4.664,68: alíquota de 22,5%
e. Acima de R$ 4.664,68: alíquota de 27,5% */

export function calcularImpostoRenda(salario: number) {
  if (salario <= 1903.98) {
    return 0;
  } else if (salario <= 2826.65) {
    return salario * 0.075;
  } else if (salario <= 3751.05) {
    return salario * 0.15;
  } else if (salario <= 4664.68) {
    return salario * 0.225;
  } else {
    return salario * 0.275;
  }
}

// 11. Faça uma função chamada "calcularMediaArredondada" que receba uma lista de números como parâmetro e retorne a média aritmética desses números, arredondada para o inteiro mais próximo.

export function calcularMediaArredondada(lista: number[]) {
  const soma = lista.reduce((acumulador, valor) => acumulador + valor, 0);
  return Math.round(soma / lista.length);
}

// 12. Desenvolva uma função chamada "contarDigitosParesImpares" que receba um número inteiro como parâmetro e retorne a quantidade de dígitos pares e a quantidade de dígitos ímpares presentes nesse número.

export function contarDigitosParesImpares(numero: number) {
  let numeroImpares = 0;
  let numeroPares = 0;
  for (let i = 0; i < numero.toString().length; i++) {
    if (numero % 2 === 0) {
      numeroImpares++;
    } else {
      numeroPares++;
    }
  }
  return { numeroImpares, numeroPares };
}

// 13. Crie uma função chamada "calcularMediaAlunos" que receba uma lista de alunos, onde cada aluno é representado por um objeto com os atributos "nome" e "nota". A função deve calcular e retornar a média das notas de todos os alunos.

interface Aluno {
  nome: string;
  nota: number;
}

export function calcularMediaAlunos(alunos: Aluno[]) {
  const media =
    alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0) /
    alunos.length;
  return media;
}

// 14. Crie uma função chamada "calcularIdade" que receba o ano de "nascimento" de uma pessoa como parâmetro e retorne a idade atual.

export function calcularIdade(anoNascimento: number) {
  const idade = new Date().getFullYear() - anoNascimento;
  return idade;
}

// 15. Crie uma função chamada "gerarTabuada" que receba um "número" como parâmetro e exiba a tabuada desse número de 1 a 10 no console.

export function gerarTabuada(numero: number) {
  for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
  }
}

/* 16. Escreva uma função chamada "advinheNumero" que gera aleatoriamente um número inteiro entre
1 e 100. Em seguida, permita que o usuário insira tentativas para adivinhar o número. A função
deve dar dicas ao usuário se o número correto é maior ou menor do que a tentativa. Quando o
usuário acertar, exiba uma mensagem de parabéns e informe a quantidade de tentativas
utilizadas. */

export function advinheNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  while (true) {
    const resposta = prompt("Insira um número entre 1 e 100");
    if (resposta === "" || isNaN(Number(resposta))) {
      console.log("Insira um número válido");
    } else if (Number(resposta) < numeroAleatorio) {
      console.log("Número maior");
      tentativas++;
    } else if (Number(resposta) > numeroAleatorio) {
      console.log("Número menor");
      tentativas++;
    } else {
      console.log("Parabéns! Você acertou em", tentativas, "tentativas");
      break;
    }
  }
}

// 17. Crie uma função chamada "verificarPropriedade" que receba um objeto e uma string como parâmetros, e retorne true se o objeto possuir a propriedade com o nome especificado na string, e false caso contrário.

export function verificarPropriedade(objeto: object, propriedade: string) {
  return objeto.hasOwnProperty(propriedade);
}

/* 18. Faça uma função chamada "calcularPrecoProduto" que receba o "valor de custo" de um produto, a"margem de lucro" desejada (em percentual) e o "valor do frete" como parâmetros. A função deve calcular e retornar o preço de venda do produto, considerando que o preço de venda é igual ao custo acrescido da margem de lucro e do valor do frete. */

export function calcularPrecoProduto(
  custo: number,
  margemLucro: number,
  frete: number
) {
  const precoVenda = custo + (custo * margemLucro) / 100 + frete;
  return precoVenda;
}

// 19. Escreva uma função que aceite uma string como parâmetro e encontre a palavra mais longa dentro da string. String de exemplo: 'Tutorial de desenvolvimento da web'. Resultado esperado: 'Desenvolvimento'.

export function encontrarMaiorPalavra(string: string) {
  let maiorPalavra = "";
  for (let i = 0; i < string.length; i++) {
    const letra = string[i];
    if (letra.toUpperCase() === letra) {
      maiorPalavra += letra;
    }
  }
  return maiorPalavra;
}

/* 20. Escreva uma função que pegue uma lista de strings e as imprima, uma por linha, em um quadro
retangular. Por exemplo, a lista ["Hello", "World", "in", "a", "frame"] é impressa como:
*********
* Hello *
* World *
* in *
* a *
* frame *
********* */

export function imprimirLista(lista: string[]) {
  const tamanho = lista.length;
  for (let i = 0; i < tamanho; i++) {
    console.log("*".repeat(lista[i].length));
  }
}

// 21. Crie uma função que receba um array de strings e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

export function filtrarMaioresDe5Caracteres(lista: string[]) {
  const novaLista = lista.filter((string) => string.length > 5);
  return novaLista;
}

// 22. Crie uma função que recebe um array de objetos com informações sobre livros (título, autor, ano, etc.) e retorne um novo array apenas com os livros escritos por determinado autor.

interface Livro {
  titulo: string;
  autor: string;
  ano: number;
}

export function filtrarLivrosPorAutor(livros: Livro[], autor: string) {
  const novaLista = livros.filter((livro) => livro.autor === autor);
  return novaLista;
}

// 23. Crie uma função que recebe um array de objetos representando pessoas (com nome, idade, etc.) e retorne o nome da pessoa mais velha.

interface Pessoa {
  nome: string;
  idade: number;
}

export function pessoaMaisVelha(pessoas: Pessoa[]) {
  const pessoaMaisVelha = pessoas.reduce((acumulador, pessoa) => {
    if (pessoa.idade > acumulador.idade) {
      return pessoa;
    } else {
      return acumulador;
    }
  });
  return pessoaMaisVelha.nome;
}

// 24. Escreva uma função que recebe um array de objetos com informações sobre carros (com marca, modelo, ano, etc.) e retorne um novo array apenas com os carros fabricados após um certo ano específico.

interface Carro {
  marca: string;
  modelo: string;
  ano: number;
}

export function filtrarCarrosAposAno(carros: Carro[], ano: number) {
  const novaLista = carros.filter((carro) => carro.ano > ano);
  return novaLista;
}

// 25. Crie uma função chamada "inverterString" que recebe uma string como argumento e retorna a string invertida. Por exemplo, para a entrada "hello", a função deve retornar "olleh".

export function inverterString(string: string) {
  let invertido = "";
  for (let i = string.length - 1; i >= 0; i--) {
    invertido += string[i];
  }
  return invertido;
}
