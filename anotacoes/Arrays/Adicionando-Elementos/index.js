let vetor = [1, 2, 3, 4, 5];

vetor[5] = 6;
// comando "unshift" irá implementar um elemento no inicio do vetor em ordem crescente
vetor.unshift(0);
vetor.unshift(-1);
vetor.unshift(-2);

// comando "push" irá implementar um elemento no final do vetor em ordem crescente
vetor.push(7);
vetor.push(6);
vetor.push(8);

console.log(vetor)