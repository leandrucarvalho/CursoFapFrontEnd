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

class Carros {
  marca: string;
  modelo: string;
  cor: string;

  constructor(marca: string, modelo: string, cor: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.cor = cor;
  }
}

const carros1 = new Carros("Honda", "Accord", "Preto");
console.log(carros1);

const carros2 = new Carros("Toyota", "Corolla", "Branco");
console.log(carros2);

const carros3 = new Carros("Ford", "Fiesta", "Branco");
console.log(carros3);

class ContaBancaria {
  nome: string;
  saldo: number;
  tipo: string;

  constructor(nome: string, saldo: number, tipo: string) {
    this.nome = nome;
    this.saldo = saldo;
    this.tipo = tipo;
  }
}

const contaBancaria1 = new ContaBancaria("1235464579", 1000, "Corrente");
console.log(contaBancaria1);

const contaBancaria2 = new ContaBancaria("1235464579", 1000, "Poupança");
console.log(contaBancaria2);

const contaBancaria3 = new ContaBancaria("1235464579", 1000000, "Poupança");
console.log(contaBancaria3);
