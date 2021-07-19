// 3- Agora inverta o lado do triângulo. Por exemplo:
let n = 5;
let repeat = 4;
let space = ' ';
let string = '*';

for (let indice = 1; indice <= n; indice += 1) {
 console.log(space.repeat(repeat) + string.repeat(indice));
 repeat -= 1;
}