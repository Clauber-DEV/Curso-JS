let Bota = {
    tipo: "Bota de Trilha",
    cardaso: "GG",
    estoque: false,
    tamanho: {
        palmilha: 41,
        bota: 42,
        caixa: {
            altura: 35,
            largura: 45,
            profundidade: 20,
        },
    },
    // array de marcas
    marcasemValores: ["Ombongo", "MacBolt", "PédeFerro"],
    // Array de objetos
    marcasemObjetos: [
        {
            nome: "Ombongo"
        },
        {
            nome: "MacBolt"
        },
        {
            nome: "PédeFerro"
        },
    ],
};

console.log(Bota);
console.log(Bota.tipo);
console.log(Bota.tamanho);