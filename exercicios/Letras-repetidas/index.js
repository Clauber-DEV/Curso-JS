/* O programa deve mostrar quantas letras repetidas tem um uma fraze ou palavra.
obs: comando toLowerCase() deixa tudo minusculo
     comando replace bubstitui um elemento por outro 
     com sufixo All faz com todos elementos expecificados
     ex: replace  replaceAll*/
const palavra = "Abacate".toLowerCase().replaceAll(" ","")
let letras = {} //objeto para receber a palabra

for (let ind = 0; ind < palavra.length; ind++) { // circuito da palavra
    if (letras[palavra[ind]]) { //quando encontrar o caracter repetido deve se acressentar + 1
        letras[palavra[ind]]++
    } else {
        letras[palavra[ind]] = 1
    }
}

console.log(letras)
