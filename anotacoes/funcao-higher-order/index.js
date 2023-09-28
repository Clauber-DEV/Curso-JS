/** Funçoes higher-order são funções que aceitam outras funções como parametro ou retornam funções como resultado.
 */

// exemplo de funções como argumentos
function executarOperacao(operacao, a, b) { //função higher-order
    return operacao(a, b);
}

function soma(x, y) {
    return x + y;
}

function subtracao(x, y) {
    return x - y;
}

console.log(executarOperacao(soma, 5, 7));// soma == function argument
console.log(executarOperacao(subtracao, 90, 80));// subtracao == function argument

// exemplo de funções retornando funções

function multiplicacao(multiplicando) {// multiplicador == higher-order
    return function (multiplicador) {
        return multiplicando * multiplicador;
    };
}

const duplicar = multiplicacao(8);
const triplicar = multiplicacao(9);

console.log(duplicar(2));
console.log(triplicar(3));

// exemplo de higher-order em vetores == array

const numeros = [1, 2, 3, 4, 5];

const aoQuadrado = numeros.map(function(numero) {
  return numero * numero;
});

const pares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

const soma = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(aoQuadrado); // Output: [1, 4, 9, 16, 25]
console.log(pares); // Output: [2, 4]
console.log(soma); // Output: 15