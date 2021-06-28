//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
    if(menorValor > numbers[index]) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);

for (index = 0; index < meuArray.length; index += 1) {
    meuArrayDiv[index] = meuArray[index] / 2;
}

console.log(meuArrayDiv);