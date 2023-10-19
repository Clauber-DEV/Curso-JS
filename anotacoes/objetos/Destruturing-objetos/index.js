const Tenis ={
    tamanho: 45,
   // marcas: [{nome: "MacBoot"}, {nome: "Ombongo"}],
    estoque: true,
    secret: 123456,
    n: "MG",
    link: {a: "prop a", b: {c:"prop c"}},
};
// Destructuring utilizado na linha 7
const {tamanho, estoque, marcas = "Não possui Marcas"}= Tenis; /* nesse treixo: "marcas = "Não possui Marcas"" caso não axista propriedade "marcas* será retornado a fraze como de fosse uma condição if compactada.*/

console.log(tamanho, estoque, marcas);

// Destructuring utilizado na linha 14
const{ secret: numeroqualquer, n: tamanhoextra} = Tenis; // substituição do nome das propriedades
console.log(numeroqualquer);
console.log(tamanhoextra);


const{
    link:{
        a,
        b:{c},
    }
} = Tenis

console.log(c);