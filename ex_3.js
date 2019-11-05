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


