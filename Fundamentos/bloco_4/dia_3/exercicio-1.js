// 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
let n = 5;
let lines;
let Columns = '';

for (let nColumns = 1; nColumns <= n; nColumns += 1) {
    Columns += '*';
}

console.log(Columns);
