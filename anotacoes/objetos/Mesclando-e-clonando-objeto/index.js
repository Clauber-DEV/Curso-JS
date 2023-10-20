let Tenis = {
    tamanho: 37,
    estoque: true,
};

let link = { link: {a: "a", b: {c:"c"}}};

let clone1 = Tenis; // clone simples
let mesclar1 = Object.assign(Tenis, link);// mesclando dois objetos com comando assign
let mesclar2 = {...Tenis, ...link}; // forma compacta de mesclagem

console.log("clone1",clone1);

clone1.estoque = false; // modificação no elemento estoque do objeto Tenis
mesclar1.link.a = "ABC";// modificação no elemento "a" do objeto link
/**este forma de modificação pode gerar alguns problemas como referencias pegas erradas como é mostrado no terminal. */
console.log("mesclar1",mesclar1);
console.log("mesclar2",mesclar2);
console.log("Tenis",Tenis);