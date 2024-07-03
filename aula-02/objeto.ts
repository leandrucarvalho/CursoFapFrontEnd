// Questão 1

const pessoa = {
  nome: "Leandro",
  idade: 28,
  endereco: "Rua tal, n 18",
};

// Questão 2
console.log(pessoa.nome);

// Questão 3

// Object.defineProperty(pessoa, "profissao", {
//   value: "Desenvolvedor Front End",
// });

// pessoa["profissao"] = "Desenvolvedor Front End";

// console.log(pessoa);

// Questão 4

const newPessoa = {
  ...pessoa,
  idade: 30,
};

// Questão 5

const animal = {
  nome: "dog",
  especie: "cachorro",
  cor: "caramelo",
};

// Questão 6

type Livro = {
  titulo?: string;
  autor?: string;
  ano?: number;
};

const livro: Livro = {
  titulo: "ação",
  autor: "eu",
  ano: 2024,
};

// Questão 7

console.log(livro.autor);

// Questão 8

const newLivro = {
  ...livro,
  ano: 2025,
};

// Questão 9

delete newLivro.titulo;

// Questão 10

type Carro = {
  marca: string;
  modelo?: string;
  ano: number;
};

const carro: Carro = {
  marca: "Ford",
  modelo: "New Fiesta",
  ano: 2015,
};

console.log(carro);

//Questão 11

const newCarro = {
  ...carro,
  modelo: undefined,
};

carro.modelo = undefined;

console.log(carro);
