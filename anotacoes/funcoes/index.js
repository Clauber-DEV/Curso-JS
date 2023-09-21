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
