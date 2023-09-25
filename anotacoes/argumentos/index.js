function soma(num1, num2){
  if(typeof num1 === "number" && typeof num2 === "number"){ // condição par caso um dos elementos não sejam um número.
    return num1 + num2
  }
  return "Dados invalidos"
}

console.log(soma(5,5))