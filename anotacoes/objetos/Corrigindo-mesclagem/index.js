let Tenis = {
    tamanho: 37,
    estoque: true,
};

let link = { link: {a: "a", b: {c:"c"}}};

function clonebjetct(objc){
    return JSON.parse(JSON.stringify(objc))
}

// forma extensa de implementação dos comandos JSON.stringify e JSON.parse
let clone1 = JSON.stringify(Tenis); // irá transformar o elemento em String
clone1 = JSON.parse(clone1);// irá transformar o elemento em objeto
// forma compacta
let clone2 = JSON.parse(JSON.stringify(Tenis));

// utilizando mesmos comandos chamados em uma function que pode usado nos outros comandos do código

clone1 = clonebjetct(Tenis)

let mesclar1 = Object.assign(
    JSON.stringify(Tenis), 
    JSON.stringify(link)
);// mesclando dois objetos com comando Object.assign

let mesclar2 = {
    ...JSON.stringify(Tenis), 
    ...JSON.stringify(link)
}; // forma compacta de mesclagem


clone1.estoque = false; // modificação no elemento estoque do objeto Tenis
mesclar1.link.a = "ABC";// modificação no elemento "a" do objeto link

console.log("clone1",clone1);
console.log("Tenis",Tenis);
console.log("mesclar1",mesclar1);
console.log("mesclar2",mesclar2);
