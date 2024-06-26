// Questão 1

const pessoa = {
  nome: "Leandro",
  idade: 28,
  endereco: "Rua tal, n 18",
};

// Questão 2
console.log(pessoa.nome);

// Questão 3

Object.defineProperty(pessoa, "profissao", {
  value: "Desenvolvedor Front End",
});

pessoa["profissao"] = "Desenvolvedor Front End";

console.log(pessoa);
