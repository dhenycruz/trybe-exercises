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

// 1 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maxLengthKey(array) {
  let maxNumber = Math.max(...array);
  for (const number in array){
    if (maxNumber === array[number]){
      return number;
    }
  }
}

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function minLengthKey(array) {
  let maxNumber = Math.min(...array);
  for (const number in array){
    if (maxNumber === array[number]){
      return number;
    }
  }
}

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggerCaractere(array) {
  let maiorString;
  for (indice = 0; indice < array.length; indice += 1) {
    for(indice2 = 1; indice2 < array.length; indice2 += 1){
      if(array[indice].length > array[indice2].length) {
        maiorString = array[indice];
      }
    }
  }
  for (const name in array) {
    if (array[name] === maiorString) {
      return name;
    }
  }
}

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maxNumberRepeat(array) {
  /*
   * Source: https://dicasdejavascript.com.br/javascript-como-remover-valores-repetidos-de-um-array/
   *
   *Removendo repetição dos valores repetidos no array.
   */
  const numerosSemRepeticao = [...new Set(array)];
  let arrayCont = {};

  for (let indice = 0; indice < numerosSemRepeticao.length; indice += 1) {
    let cont = 0;
    for (let indice2 = 0; indice2 < array.length; indice2 += 1) {
      if(numerosSemRepeticao[indice] === array[indice2]) {
        cont += 1;
      }
    }
    let key = numerosSemRepeticao[indice];
    arrayCont[key] = cont;
  }
  const arrayValue = Object.values(arrayCont);
  const maiorNumber = Math.max(...arrayValue);
  // console.log(arrayValue);
  // console.log(maiorNumber);
  for (number in arrayCont) {
    if(arrayCont[number] === maiorNumber) {
      return number;
    }
  }
}

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somNumber(number) {
  let soma = 1;
  for (let index = 2; index <= number; index += 1) {
    soma =  soma + index;
  }

  return soma;
}

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function checkString(word, ending) {
  const tamEndig = ending.length;
  const startWord = word.length - tamEndig;
  const comp = word.substr(startWord, tamEndig);
  if(comp === ending) {
    return true;
  }
  
  return false;
}

console.log(checkString('trybe','be'));