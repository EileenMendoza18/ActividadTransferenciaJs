import vaca from 'prompt-sync';

const pollito = vaca();

// let nombre = pollito('¿Cuál es tu nombre? ');

// console.log(`El nombre de la persona es: ${nombre}`);

let numero1 = parseInt(pollito('Ingrese el primer numero: '));
let numero2 =parseInt( pollito('Ingrese el segundo numero: '));

let suma = numero1 + numero2;

console.log(`La suma del numero ${numero1} y el numero ${numero2}, es ${suma}`);

console.log(`La resta entr el numero ${numero1} y el numero ${numero2}, es ${numero1-numero2}`);