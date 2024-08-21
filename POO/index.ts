class Pessoa {
  nome: string;
  idade: number;
  sexo: string;

  constructor(nome: string, idade: number, sexo: string) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
}

const pessoa1 = new Pessoa("Leandro", 28, "Masculino");
console.log(pessoa1);

const pessoa2 = new Pessoa("Pessoa 2", 30, "Feminino");
console.log(pessoa2);
