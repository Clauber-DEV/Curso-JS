/* tipos básicos de funções:
 * 1 function declaration: Estas são funções que são declaradas com um nome específico e podem ser chamadas pelo seu nome. Por exemplo:*/
function declaration() {
    const soma = 1 + 3
    if (soma === 4) {
        return true
    }
    return false
}
console.log(declaration())// chamando a função pelo nome

// 2 function expression: Estas são funções que não possuem um nome e são atribuídas a uma variável ou passadas como argumentos para outras funções. Por exemplo:
const expression = function () {
    const soma = 1 + 3
    if (soma === 4) {
        return true
    }
    return false
}
console.log(expression())// chamando a função através da variável

// 3 function Arrow ou (funções de seta): São uma sintaxe mais curta e concisa para criar funções. Elas têm algumas diferenças em relação às funções normais, como o escopo do `this`. Por exemplo:
const arrow = () => {
    const mult = 4 * 3
    return mult
}
console.log(arrow()) // chamando a função de seta

//4. Métodos de objeto: Essas são funções que são definidas como propriedades de objetos. Eles são chamados usando a notação de ponto ou colchetes. Por exemplo:


const objeto = {
    minhaFuncao: function () {
        // código da função
    }
}

objeto.minhaFuncao(); // chamando a função como um método de objeto

/* Resumo sore funções
 * Funções em JavaScript são blocos de código reutilizáveis que podem ser executados quando chamados. Elas são usadas para agrupar instruções relacionadas em uma unidade lógica e modularizar o código. As funções permitem que você escreva um trecho de código uma vez e o reutilize em várias partes do programa.

Existem duas formas principais de definir funções em JavaScript:

Declaração de função:



function nomeDaFuncao(parametro1, parametro2) {
   // Bloco de código a ser executado
   // Pode incluir instruções e retornar um valor
   return resultado;
}


Expressão de função:

const nomeDaFuncao = function(parametro1, parametro2) {
   // Bloco de código a ser executado
   // Pode incluir instruções e retornar um valor
   return resultado;
};


Uma função pode receber zero ou mais parâmetros (também chamados de argumentos), que são valores passados para a função quando ela é chamada. Dentro do bloco de código da função, você pode realizar operações, manipular valores, executar lógica condicional, iterar em loops e muito mais.

Para chamar uma função e executar seu código, você usa o nome da função seguido por parênteses e, se necessário, passa os argumentos correspondentes:



nomeDaFuncao(argumento1, argumento2);



Além disso, as funções podem retornar valores usando a palavra-chave return. Isso permite que o resultado seja capturado quando a função é chamada e usado posteriormente no código.

As funções são fundamentais para a organização e reutilização do código em JavaScript. Elas ajudam a evitar repetições, modularizam a lógica e tornam o código mais legível e fácil de manter. Além disso, JavaScript também suporta funções anônimas, funções de flecha (arrow functions), funções de ordem superior (higher-order functions) e muitos outros conceitos avançados relacionados a funções.
 */