//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers);

for (index = 1; index < numbers.length; index += 1){
    for (index2 = 0; index2 < numbers.length; index2 += 1) {
        let position = numbers[index2];
        if (numbers[index] > numbers[index2]) {
            numbers[index2] = numbers[index];
            numbers[index] = position;
        }
    }
}

console.log(numbers);