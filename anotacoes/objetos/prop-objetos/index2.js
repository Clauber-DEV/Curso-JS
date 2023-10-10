// retorno de objetos com funções
function Tenis(tamanho, estoque, preco) {
    return {
        tamanho: tamanho, // forma de retorno tradicional
        estoque, // forma abreviada
        preco: preco // objeto preco: recebendo o parameto preco
    }
}

console.log(Tenis(35, true, "R$ 150,00"))

// restorno de objetos com variáveis
const tamanho = 39
const estoque = false
const preco = "R$148,00";

const Tenis2 = {
    tamanho: tamanho, // objeto tamanho: recebendo a variavel tamanho
    estoque: estoque,
    preco: preco,
};

console.log(Tenis2);

// retorno de objetos com métodos
const Tenis3 = {
    getTamanho() { // getTamanho(){} == getTamanho: function(){}
        return 35;
    },
};

console.log(Tenis3.getTamanho())