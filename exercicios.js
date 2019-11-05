// 1) mostre com exemplos qual a diferença de var, let e const

A principal diferença entre var e let está no escopo. Caso seja declarado LET dentro de um escopo de bloco, ela funcionará apenas naquele bloco, não podendo ser usada fora 
desse escopo. O mesmo não acontece com o VAR, podendo ser utilizado fora do escopo de bloco;
exemplo: 
//VAR
var condicao = true;


if(condicao){

  var minhaVariavel = 10;

  console.log(minhaVariavel);

}


// Funciona, pois o escopo de bloco não existe para var

function func1(){

  console.log(minhaVariavel);
}

//LET

var condicao = true;



if(condicao){

  let minhaVariavel = 10;

  // É possível manipular a let, pois ela foi declarada

  // neste bloco

  console.log(minhaVariavel);

}


// ERRO, Não é possível acessar a variável, pois ela tem escopo de bloco.

function func1(){

  console.log(minhaVariavel);

}

Além Disso, o CONST é um valor fixo, não podendo ser alterado no decorrer do código. O LET e o VAR podem mudar seu valor ao decorrer do código.A

const numero = 5;

numero = 7;

console.log(numero) // ERRO, pois foi declarada como CONST.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2) Faça uma função que recebe um param a e um paramB
//a) Soma:

const sum = (a,b) => {
    return a + b;
}

const subtraction = (a,b) => {
    return a - b;
}

const exponential = (a,b) => {
    resultado = Math.pow(a, b)
    console.log(resultado);
}

//3) Monte um array de 20 números (1 a 20) e remova todos os números primos
const list = [];
var listAux1 = [];
var listAux2 = [];
var listPrimos = [];

//Laço para preencher vetor
for (i = 1; i <= 20; i++) {
  list.push(i);
  
}

listAux1 = list.slice(0,10);
listAux2 = list.slice(10,20);

//Organize listAux1
listAux1.shift();
listAux1.pop();
listAux1.pop();
listAux1.pop();
const num1 = listAux1.pop();
listAux1.pop();
const num2 = listAux1.pop();
listAux1.pop();
listAux1.push(num2);
listAux1.push(num1);

//Organize listAux2
listAux2.pop();
const num3 = listAux2.pop();
listAux2.pop();
const num4 = listAux2.pop();
listAux2.pop();
listAux2.pop();
listAux2.pop();
const num5 = listAux2.pop();
listAux2.pop();
listAux2.push(num5);
listAux2.push(num4);
listAux2.push(num3);

//Concat Arrays
listPrimos = listAux1.concat(listAux2);

console.log(listPrimos);

//////////////////////////////////////////////////////////////////////////

//4) Percorrer a lista abaixo e remover todas as frutas com 's' ou 'ç' e printar a nova lista
const list = ['abacate', 'banana', 'maça', 'uva', 'pera', 'pessego']

var newList = [];

list.forEach(element => {
    if (element.includes('s')) {
        console.log(element);
    }
    else if (element.includes('ç')){
        console.log(element);
    }
    else {
        newList.push(element);
    }
});

console.log(newList);

//5) Ordenar por ordem alfabética até a segunda letra.
var list = ['abacate', 'amora', 'banana', 'maça', 'uva', 'pera', 'pessego'];

console.log('stringArray:', list.join());
console.log('Ordenada:', list.sort());

//////////////////////////////////////////////////////////////////////////////////////////////

//6) Divdir a lista ao meio
const list = ['abacate', 'banana', 'maça', 'uva', 'pera', 'pessego']
const newList = ['abacate', 'banana', 'maça', 'uva', 'pera', 'pessego', 'morango', 'kiwi'];

const primeiraMetadeDaLista = (lista) => {

    let arrayLength = lista.length;
    const metade = arrayLength / 2;
    
    const resultado = lista.splice(0,metade);
    console.log(resultado);
}

const segundaMetadeDaLista = (lista) => {
   
    console.log(lista);
}

primeiraMetadeDaLista(list);
segundaMetadeDaLista(list);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//7) Percorrer uma lista do mesmo formato da lista abaixo e achar a maior renda

const listaDePessoas = [
  {
      'nome': 'Bryan',
      'idade': 18,
      'sexo': 'm',
      'renda': 1400
  },
  {
      'nome': 'Guilherme',
      'idade': 70,
      'sexo': 'm',
      'renda': 100000
  },
  {
      'nome': 'Gabriel',
      'idade': 70,
      'sexo': 'm',
      'renda': 400
  },
  {
      'nome': 'Carla',
      'idade': 70,
      'sexo': 'm',
      'renda': 5000
  }
]

var maiorRenda = listaDePessoas[0].renda;
var menorRenda = listaDePessoas[0].renda;

listaDePessoas.forEach(element => {
  if (element.renda > maiorRenda) {

      maiorRenda = element.renda;

  }

  else if (element.renda < menorRenda) {

      menorRenda = element.renda;

  }
});

console.log('Maior Renda: ' + maiorRenda);
console.log('Maior Renda: ' + menorRenda);
