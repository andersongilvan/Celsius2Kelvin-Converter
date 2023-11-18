import pegarDados from 'readline-sync';

console.log('\nConversor de Celsius para Kelvin\n')

let c = pegarDados.question('Informe um valor em Selsius: ');
let k = Number(c) + 273.15;
console.log(c + '°c equivale a ' + k + 'k');