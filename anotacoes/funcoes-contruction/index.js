// exemplo utilisando strings:
function Name(name, sobrenome) {
    this.nome = name;

    this.sobrenome = () => {
        const nomecompleto = `${this.nome} ${sobrenome}`;
        return nomecompleto
    };
}

const clauber = new Name("Clauber", "Cardoso");

console.log(clauber.sobrenome());

// exemplo utilizando numbers:
function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`
    }
    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`
    }
}

const calculadora = new Calculadora()

console.log(calculadora.soma(2, 3))
console.log(calculadora.subtracao(5, 3))