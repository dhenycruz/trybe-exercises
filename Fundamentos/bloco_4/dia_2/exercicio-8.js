// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let min = 1;
let max = 100;
let meuArray = [];

for (index = 0; index < 25; index += 1) {
    let number =  Math.floor(Math.random() * (max - min)) + min;
    meuArray.push(number);
}

console.log(meuArray);
