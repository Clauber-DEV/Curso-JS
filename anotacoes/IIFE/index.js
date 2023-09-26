// IIFE == Immediately Invoked Function Expression
// IIFE == Expressão de função invocada imediatamente
//ex: 01 function simples
(function (num1, num2) {
    const soma = num1 + num2
    console.log(soma)
})(1, 2); // a function invoca as mesma de meneira isolada

// ex: 02 arrowfunction

((num1, num2) => {
    const soma = num1 + num2
    console.log(soma)
})(2, 3);
// essa ferramenta permite utilizar o var de forma isolada e tbm não pega variaveis fora de seu escopo