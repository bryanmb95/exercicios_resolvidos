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