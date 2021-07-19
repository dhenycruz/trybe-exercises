/**
 * 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
 * - Exemplo de palíndromo: arara .
 * - verificaPalindrome('arara');
 * - Retorno esperado: true
 * - verificaPalindrome('desenvolvimento');
 * - Retorno esperado: false
 */

function checkPalindromo(string) {
  let stringContrary = '';
  for (let indice = string.length - 1; indice >= 0; indice -= 1) {
   // console.log(string[indice]);
    stringContrary += `${string[indice]}`;
  }

  if(string === stringContrary) {
    return true;
  }

  return false;
}