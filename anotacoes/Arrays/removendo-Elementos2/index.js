/** Comando "slice" copia os dados em especifico de um vetor. 
 *  Comando "splice" remove os elementos em especifico dentro de uma vetor.
*/

let vetor = [
    { nome: "clauber", tel: "(00)24527345" },
    { nome: "Amorsim", tel: "(11)12345634" },
    { nome: "amigo1 ", tel: "(22)34563434" },
    { nome: "amigo2 ", tel: "(33)21342678" },
    { nome: "amigo3 ", tel: "(44)76967866" },
];

console.log("vetor original");
console.table(vetor);

const vetor2 = vetor.slice(0, 3); // Comando "slice" irá copiar os indices 0, 1 e 2 do vetor original e agregar ao vetor2
console.log("vetor2 comando slice");
console.table(vetor2);
console.log("vetor original apos o comando slice")
console.table(vetor);

const vetor3 = vetor.splice(0, 4); // Comando "splice" irá remover os indices 0, 1, 2 e 3 do vetor original e agregar ao vetor3.
console.log("vetor3 comando splice");
console.table(vetor3);

console.log("vetor original apos o comando splice")
console.table(vetor);