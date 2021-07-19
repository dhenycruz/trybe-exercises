// 4- Depois, faça uma pirâmide com n asteriscos de base:
let n = 5;
let c = 1;
let string = '*';
let space = ' ';
let contSpace = 2;

while( c <= n){
  console.log(space.repeat(contSpace) + string.repeat(c));
  c = c + 2;
  contSpace -= 1;
}
