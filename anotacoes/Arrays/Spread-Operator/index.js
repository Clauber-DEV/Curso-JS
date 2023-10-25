/**O Spread Operator é uma ferramenta representada com "..." utilizada para desmembrar Arrays, objetos e strings */
const num = [1, 2, 3, 4, 5];
const numeros = [1, 2, 33, 4, 5];

console.log(num[0], num[1], num[2], num[3], num[4]);
console.log(...num); // aplicação do spread que faz a mesma função da linha 4 do código

console.log(Math.max(1, 2, 3, 4, 5)); // a comando "Math.max" irá mostrar o maior valor do Array
console.log(Math.max(...numeros)); // faz a msm coisa que a linha 7 do código utilizando o Spread