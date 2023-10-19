let Tenis = {
    tamanho: 37,
    estoque: true,
};

let link = { link: {a: "a", b: {c:"c"}}};

let clone1 = Tenis; // clone simples
let mesclar1 = Object.assign(Tenis, link);// mesclando dois objetos com comando assign
let mesclar2 = {...Tenis, ...link}; // forma compacta de mesclagem

console.log("clone1"+clone1);

clone1.estoque = false; // modificação no elemento estoque do objeto Tenis
mesclar1.link.a = "ABC";// modificação no elemento "a" do objeto link

console.log("mesclar 1"+mesclar1);
console.log("mesclar 2"+mesclar2);
console.log("objeto Tenis"+Tenis);