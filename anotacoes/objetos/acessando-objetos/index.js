const Tenis = {
    tamanho: 45,
    marca: "MacBoot",
};
// O elemnto "." é utiizado para acessar as propriedades interna de um outro elemento.
console.log(Tenis.marca); //está acessando a propriedade marca do objeto Tenis
console.log(Tenis.tamanho); //está acessando a propriedade marca do objeto Tenis
console.log(typeof Tenis.tamanho);
console.log(Tenis.tamanho + 5);
console.log("Marca" + Tenis.marca + "è muito boa!"); 
console.log(`Marca ${Tenis.marca} é muito boa!`)