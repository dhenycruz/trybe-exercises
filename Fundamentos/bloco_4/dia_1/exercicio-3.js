/* Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados. */

let numero1 = 15;
let numero2 = 50;
let numero3 = 23

if((numero1 > numero2) && (numero1 > numero3)){
    console.log('O maior número entre '+numero1+' , '+numero2+' e '+numero3+' é '+numero1);
} else if((numero1 > numero2) && (numero1 < numero3)){
    console.log('O maior número entre '+numero1+' , '+numero2+' e '+numero3+' é '+numero3);
} else {
    console.log('O maior número entre '+numero1+' , '+numero2+' e '+numero3+' é '+numero2);
}
