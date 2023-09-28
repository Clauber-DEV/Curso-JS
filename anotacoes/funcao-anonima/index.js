/**EM JavaScript as funções anonimas não tem noma associado a elas.
 * Em vez de serem definidas com um nome especifico, como uma função nomeada, elas são criadas no local e geralmente são passadas como argumantos para outras funções ou atribiudas a variaveis
 */
//ex:
const soma = function (a, b) {
    return a + b
};
// função anonima
const resultado = soma(4, 6)

console.log(resultado)

/** As funções anõnimas sçao frequentemente usadas em funções em que deseja pasa uma função como argumento para outra função, como em callback ou criar funções temporárias em tempo de execução.
*/
//ex:
function executarOperacao(a, b, operacao) {
    return operacao(a, b);
}

const resultadoSoma = executarOperacao(4, 6, function (a, b) { //função anõnima em callback
    return a + b;
})

console.log(resultadoSoma);