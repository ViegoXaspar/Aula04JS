let numeroFor = 0;
for(let i = 0; i <= 9; i++) {
    numeroFor = parseInt(Math.random()*101)
    console.log(numeroFor);
    
}
console.log('--------------');
console.log('--------------');
// Fazer uma contagem entre 0 e 20
for (let i = 0; i<=20; i++) {
    console.log(i);
}
// Fazer uma contagem entre 0 e 100
console.log('--------------');
console.log('--------------');

for (let i = 0; i<=100; i+=5)  {
    console.log(i); 
}
// Fazer uma contagerm regressiva de 20 até 0
console.log('--------------');
console.log('--------------');

for (let i = 20; i>=0; i--)  {
    console.log(i); 
}
// Sortear um número entre 0 e 10 - exibir na tela;
console.log('--------------');
console.log('--------------');

let numeroSorteado3 = parseInt(Math.random()*11)
for (let i = 0; i <= 10; i++){
    console.log(`${numeroSorteado3} x ${i}  = ${numeroSorteado3*i}`);
}   

console.log('--------------');
console.log('--------------');
// Gera um número aleatório entre 0 e 10
let numer = Math.floor(Math.random() * 11);

console.log(`Tabuada do ${numer}:`);

// Exibe a tabuada do número gerado
for (let i = 0; i <= 10; i++) {
    console.log(`${numer} x ${i} = ${numer * i}`);
}
