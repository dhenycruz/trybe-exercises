// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

let line = 5;

for (let indice = 0; indice <= line; indice += 1) {
  let string = '*';
  console.log(string.repeat(indice));
}