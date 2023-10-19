let Tenis = {
    tamanho: 43,
    estoque: true,
};

Tenis.tamanho = 45; // modificando ou atualizando dados
Tenis.estoque = false;
Tenis.cor = "Azul"; // adição de elementos
Tenis["preco"] = "R$ 170,00"; // outra forma de adcionar elementos ao objeto

console.log(Tenis);
console.log(Tenis["preco"])