/** Matrizes são Arrays que podem quardar dados em linhas e colunas */

const matriz = [
    [1,2,3],
    [4,5,6],
    [5,6,7],
    [
        [1,2,3],
        [4,5,6],
        [5,6,7],
    ]
];

console.table(matriz);
console.log(matriz[3][0][1]);