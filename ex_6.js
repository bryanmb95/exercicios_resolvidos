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

