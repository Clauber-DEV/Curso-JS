/*
 *  Uma Closure ocorre normalmente quando uma 
 * função é declarada dentro do corpo da outra, e a 
 * função interior refencia variaveis locais da função exterior.
 */

// ex utilizando String:
function QualSeuNome(pnome){
    const msg = `O seu nome é: `
    // function closure
    function nometodo (){
        return `${msg} ${pnome}`
    }
    return nometodo()
}

console.log(QualSeuNome("Clauber"))

// ex utilizandoo Numbers

function Calculadora(num1,num2){
    const msg = `Resultado`
    // arrowfunctions closures
    const soma = () => {
        return `${msg} ${num1 + num2}`
    }
    const subtracao = () => {
        return `${msg} ${num1 - num2}`
    }
    const multplicasao = () => {
        return `${msg} ${num1 * num2}`
    }
    const divisao = () => {
        return `${msg} ${num1 / num2}`
    }

    return {
        soma: soma(),
        subtracao: subtracao(),
        multplicasao: multplicasao(),
        divisao: divisao()
    }
}

console.log(Calculadora(12, 6))