/**
 * Uma pessoa que trabalha de carteira assinada no Brasil
 * tem descontados de seu salário bruto o INSS e o IR.
 * Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
 * 
 * - A notação para um salário de R$1500,10, por exemplo, 
 *   deve ser 1500.10. Para as faixas de impostos, 
 *   use as seguintes referências:
 *      - INSS (Instituto Nacional do Seguro Social)
 *          - Salário bruto até R$ 1.556,94: alíquota de 8%;
 *          - Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
 *          - Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
 *          - Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88;
 *      - IR (Imposto de Renda)
 *          - Até R$ 1.903,98: isento de imposto de renda;
 *          - De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 
 *            a deduzir do imposto;
 *          - De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir
 *            do imposto;
 *          - De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir 
 *            do imposto;
 *          - Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
 */

let salarioBruto = 6000.00;
let aliquotaINSS;
let salarioBASE;
let saldoIR = 0;

//calculo INSS
if(salarioBruto <= 1556.94){
    aliquotaINSS = (8/100) * salarioBruto;
    salarioBASE = salarioBruto - aliquotaINSS;
    console.log('8% = '+aliquotaINSS);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = (9/100) * salarioBruto;
    salarioBASE = salarioBruto - aliquotaINSS;
    console.log('9% = '+aliquotaINSS);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = (11/100) * salarioBruto;
    salarioBASE = salarioBruto - aliquotaINSS;
    console.log('11% = '+aliquotaINSS);
} else if (salarioBruto > 5189.82) {
    aliquotaINSS = 570.88;
    salarioBASE = salarioBruto - aliquotaINSS;
    console.log('11% = '+aliquotaINSS);
}

console.log(salarioBASE);

if(salarioBASE <= 1903.98){
    //isento de imposto de renda
} else if (salarioBASE >= 1903.99 || salarioBASE <= 2826.65){
    //De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
    saldoIR = (7.5/100) * salarioBASE - 142.80;
    console.log(saldoIR);
} else if (salarioBASE >= 2826.66 || salarioBASE <= 3751,05){
    //De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
    saldoIR = (15/100) * salarioBASE - 142.80;
    console.log(saldoIR);
} else if (salarioBASE >= 3751.05 || salarioBASE <= 4664.68){
    //De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
    saldoIR = (22.5/100) * salarioBASE - 142.80;
    console.log(saldoIR);
} else if (salarioBASE > 4664.68) {
    //Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
    saldoIR = (27.5/100) * salarioBASE - 142.80;
    console.log(saldoIR);
}

let salarioLiquido = salarioBASE - saldoIR;

console.log('Salário líquido é de '+salarioLiquido);


