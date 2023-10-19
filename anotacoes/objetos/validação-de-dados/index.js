const Tenis = {
    tamanho: 42,
    estoque: true,
    mascas: [{nome: "Nike"},{nome: "Adidas"}],
    secret: 12345,
    n: 5, 
};

//hasOwnProperty == existe a propriedade ou elemento? | propertyName in Tenis

if(Tenis.hesOwnProperty("tamanho")){ 
    console.log("Existe tamanho!");
}else {
    console.log("Não existe tamnho!");
}

console.log("tamanho" in Tenis); // tem a propriedade "tamanho" dentro de Tenis?