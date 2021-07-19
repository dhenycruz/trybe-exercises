// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

const objAtleta = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {golden: 2, silver: 3}
}

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
const nameAtleta = objAtleta.name;
const lastNameAtleta = objAtleta.lastName;
const ageAtleta = objAtleta.age;

console.log(`A jogadora ${nameAtleta} ${lastNameAtleta} tem ${ageAtleta} anos de idade.`);

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
objAtleta.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(objAtleta);

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

const vezesMDM = objAtleta.bestInTheWorld.length;

console.log(`A jogadora ${nameAtleta} ${lastNameAtleta} foi eleita a melhor do mundo por ${vezesMDM} vezes.`);

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

console.log(`A jogadora possui ${objAtleta.medals.golden} medalhas de ouro e ${objAtleta.medals.silver} medalhas de prata`);