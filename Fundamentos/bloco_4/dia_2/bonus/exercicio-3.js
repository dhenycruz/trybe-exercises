//Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//console.log(numbers.length);

for (let index = 0; index <= numbers.length; index += 1){
    let index2 = index +1;
    if(index + 1 < numbers.length){
        //numbers[index] = numbers[index] * 2;
    } else {
        numbers[index] = numbers[index] * numbers[index2];
    }
}

console.log(numbers);
//[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
