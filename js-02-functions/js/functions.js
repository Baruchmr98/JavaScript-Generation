//funcion que permita saludar
function saludar () {
    console.log("Hola, desde una función.");
}
saludar();

//Hoisting.

function saludar () {
    console.log("Hola, invocando la función hoisting.");
}
saludar();

//funciones que retornan algo.
/*
Para que una funcion retorne algo, necesitamos indicarle al codigo de la funcion que vamos a retornar mediante la palabra 'return'.
*/
function greeting() {
    return "Hola desde una funcion que retorna";
}
console.log(greeting());

//funcion que retorna algo y recibe parametros
function sumar (x, y) {
    return x + y;
}
let resultado = sumar(255, 245);

console.log(resultado);

//calcular el cuadrado de un número
function calcCuadrado (numero) {
    return numero * numero;
}
let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//funciones flecha (arrow function). 
/*
es una manera de declarar una funcion por declaracion, sintetizando codigo y haciendolo mas legible.
*/
const calcCubo = (number) => {
    return number * number * number;
}
let resultCubo = calcCubo(3);
console.log(resultCubo);

//funciones anonimas. 
/*
son un tipo de funciones que se declaran sin nombre de funcion y se alojan en el einterior de una variable. se hace referencia a ellas cada vez que la utilicemos.
las funciones anonimas no permiten el hoisting (no se pueden invocar antes de inicializarlas).
*/
const mensaje = function () {
    return "Este es un mensaje desde una funcion anónima";
}
console.log(mensaje());


const mensajeP = function () {
    console.log("Este es un mensaje desde una funcion anónima");
}
mensajeP();

//callbacks. 
/*
es pasar una funcion B por parametro a una funcion a, de modo que la funcion 'A' pueda ejecutar esa funcion de forma generica desde su codigo.
*/
const functionB = function() {
    console.log("Ejecutando función B");
}
const functionA = function(callback) {
    callback();
}
functionA(functionB); //asynct.



















