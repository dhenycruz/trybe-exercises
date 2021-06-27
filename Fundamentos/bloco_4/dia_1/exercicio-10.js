/**
 * 
 * Escreva um programa que se inicie com dois valores
 * em duas variáveis diferentes: o custo de um produto
 * e seu valor de venda. A partir dos valores, calcule
 * quanto de lucro (valor de venda descontado o custo do produto)
 * a empresa terá ao vender mil desses produtos.
 * 
 * - Atente que, sobre o custo do produto, incide um imposto de 20%.
 * - Seu programa também deve emitir uma mensagem de erro e encerrar caso 
 *   algum dos seus valores de entrada seja menor que zero.
 * - O lucro de um produto é o resultado da subtração do valor de venda 
 *   pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
 *      - valorCustoTotal = valorCusto + impostoSobreOCusto
 *      - lucro = valorVenda - valorCustoTotal (lucro de um produto)
 * 
 */

let custoProduto = 10.00;
let vendaProduto = 15.00;

//

if(custoProduto < 0 || vendaProduto < 0 || vendaProduto <= custoProduto){
    console.log('Valor do custo ou da venda do produto é menor que zero, ou o valor da venda do produto é menor que o custo do produto.');
} else {
    let valorImposto = ((20/100) * custoProduto);
    console.log('Valor do Imposto: '+valorImposto);

    let valorCustoTotal = custoProduto + valorImposto;
    console.log('Valor total do custo do produto: '+valorCustoTotal);

    let lucro = vendaProduto - valorCustoTotal
    console.log('Lucro na venda de apenas uma unidade do Produto: '+lucro);

    let lucroMilUnidades = lucro * 1000;
    console.log('Lucro na venda de mil unidades: '+lucroMilUnidades);
}
