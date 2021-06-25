/**
 * Escreva um programa que receba o nome de uma peça de xadrez e retorne os 
 * movimentos que ela faz.
 * 
 * - Como desafio, faça o programa funcionar tanto se receber o 
 *  nome de uma peça com letras maiúsculas quanto com letras minúsculas,
 *  sem aumentar a quantidade de condicionais.
 * 
 * - Como dica, você pode pesquisar uma função que faz uma string ficar com 
 *  todas as letras minúsculas (lower case) .
 * 
 * - Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
 * 
 * - Exemplo: bishop (bispo) -> diagonals (diagonais)
 * 
 */

let pecaXadrex = "Peao";

switch (pecaXadrex){
    case 'Peao':
        console.log('Peão -> O Peão pode se mover uma casa para frente ou duas no seu primeiro movimento e para atacar uma casa para diagonais na sua frente.');
        break;
    case 'Torre':
        console.log('Torre ->A Torre pode se mover na vertical ou horizontal quantas casa quiser.');
        break;
    case 'Cavalo':
        console.log('Cavalo -> O cavalo pode se mover em L, a base do L duas casas e 3 casas na vertical do L');
        break;
    case 'Bispo':
        console.log('Bispo -> O Bispo pode se mover nas diagonais e para todos os sentindos do tabuleiro.');
        break;
    case 'Rainha':
        console.log('Rainha -> A Rainha pode se mover na vertical, horizontal, em todas horizontais em qualquer sentindo.');
        break;
    case 'Rei':
        console.log('Rei -> O rei pode se mover uma casa para qualquer sentindo, tanto para se mover, quanto para atacar');
        break;
    default:
        console.log('Não foi possivep identificar a peça que você está se referindo.');
        break;    
}