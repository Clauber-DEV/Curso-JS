// funtion simples
function simples() {
    return "simples"
}
console.log(simples())

// function arrow

const funcarrow = () => {
    return "função flecha" // como return
}
console.log(funcarrow())

const FuncArrows = () => "função flexa sem retorno" // não funciona com multiplas linhas

console.log(FuncArrows()) /** Os console.log em funções simples aceitam o Hoisthing significa pode ser declarados acima da função porem isso não se aplica nas ArrowFunction que devem ser declarados abaixo delas.
ArrowFunction também não aceitam o comando arguments 
exemploo de function com arguments*/

function soma() {
    let total = 0
    for (let ind = 0; ind < arguments.length; ind++) { // carrega automaticamente todos os parametros
        total += arguments[ind]
    }
    return total
}

console.log(soma(1, 2, 3))
console.log(soma(10, 30, 60))


const funcparam = (param) => param // esse formato aceita apenas um parametro

/**exemplo de "classes", "constructor", "new" e "this". */

class novaFunc { // nova classe criada com parametro "clauber" 
    constructor(meunome) { // constructor recebe o parametro "meunome" = "Clauber"
        this.nome = meunome // Este parametro "nome" = os ´propriedades de "meunome"
    }
}

const a = new novaFunc("Clauber")
console.log(a.nome)

// exemplo de contexto, this dinamico.

const lanches = {
    cardapio: [
        { nome: "x-salada", preco: "R$ 25" },
        { nome: "x-tudo", preco: "R$ 30" },
    ],
    meupedidofuncao: function (select) {
        return console.log(this.cardapio[select]); // nesse caso esse this pega o contexto global = window ou do pai
    },

    // exemplo de this lexico.
    meupedidoArrowFunc: (select) => {
        this.cardapio = [
            { nome: "x-salada", preco: "R$ 25" },
            { nome: "x-tudo", preco: "R$ 30" },
        ];
        return console.log(this.cardapio[select]);// esse this so pega dentro do seu contexto ou onde é declaredo
    },
};

lanches.meupedidofuncao(1);
lanches.meupedidoArrowFunc(1);