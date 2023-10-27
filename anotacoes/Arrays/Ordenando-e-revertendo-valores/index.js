const stringvetor = ["A", "F", "E", "B", "D", "C"];
console.log(stringvetor.sort());
console.log(stringvetor.reverse());
/**No código acima vamos que o comado sort funciona bem com tipo string, porem logo no código abaixo vemos que o msm comando não se aplica com tipo number.
 */
const numbervetor = [2, 5, 3, 67, 11, 9];
//console.log(numbervetor.sort()); não funciona
console.log(numbervetor.sort((a, b) => a - b)); // aplicando esses parametros o sort consegue ordenar de forma cresente.
console.log(numbervetor.sort((a, b) => a - b).reverse()); // forma decrescente ou reversa

/**Utilizando esse msm método em objetos */
const objvetor = [
    {
        nome: "Denner Trocador"
    },
    {
        nome: "Clauber Cardoso"
    },
    {
        nome: "Patricia Rizkalla"
    },
    {
        nome: "Luana Rizkalla"
    },
    {
        nome: "Bruna Rizkalla"
    },
    {
        nome: "Carlos Roberto"
    },
];

console.log(objvetor.sort((a,b) => a.nome.localeCompare(b.nome)));/**parametro usado para organizar lista em objetos em ordem alfabetica */
console.log(objvetor.sort((a,b) => a.nome.localeCompare(b.nome)).reverse());/**invertido */