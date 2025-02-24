// Sorteando um numero entre 0 e 5
const numero = parseInt(Math.random()*6)
console.log(numero);

switch (numero) {
    case 0:
        console.log('o numero sorteado é o ZERO');
        break;
    case 1:
        console.log('o número sorteado é o UM');
        break;
    case 2:
        console.log('o número sorteado é o DOIS');    
        break;
    case 3:
        console.log('o número sorteado é o TRES');
        break;
    case 4:
        console.log('o número sorteado é o QUATRO');
        break;

    default:
            console.log('o número sorteado é o CINCO');



}

let n = parseInt(Math.random()*6);
console.log(n);

if (n === 0) {  
    console.log('O Número é 0');  
} else if (n === 1){ 
    console.log('O Número é 1');   
} else if (n === 2){   
    console.log('O Número é 2'); 
} else if (n === 3){    
    console.log('O Número é 3');
} else if (n === 4){    
    console.log('O Número é 4');
} else {
    console.log('O Número é 5');
}  


const novoNumero = parseInt(Math.random()*101);
console.log(`Novo Número Sorteado = ${novoNumero}`);
if (novoNumero <= 20) {
    console.log('o Número está no intervalo entre 0 e 20');
}
else {
    console.log('o Número não esta no intervalo');    
}


