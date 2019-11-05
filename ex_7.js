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