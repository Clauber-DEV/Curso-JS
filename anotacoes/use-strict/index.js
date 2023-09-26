/**
 * O Strict mode eleimina algns erros silenciosos 
 * que passariam  batidos do Java Script e o faz emitir erros.
 * Além idisso o Strict corrige alguns erros que dificultariam a otimização do JavaScript
 * então em alguns casos os códigos roram mais rapido e otimizado no modo Strict ou nodo estrito
 * do que no modo normal.
 * 
 * link: https://www.geeksforgeeks.org/strict-mode-javascript/
 */
"use strict"; // <= aplicação do modo restrito no código.
(() => {
    let teste = "teste";
    console.log(teste);
})();