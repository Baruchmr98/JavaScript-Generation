//Arrays
const numeros = [
    1, 
    2, 
    3, 
    4, 
    5
];
console.log(numeros);

const springs = [
    "tacos", 
    "baguets", 
    "crema", 
    "carnita asada"
];
console.log(springs);

const mixto = [
    "pluma",
    8,
    true,
    {nombre: "baruch"}
];
console.log(mixto);

//Array vacío

const lista=[];
// console.log(lista);

lista[0] = "Leche";
lista[1] = "Carne de pollo";
console.log(lista);

//Otra forma de crear Arrays

const frutas = new Array("manzana", "pera", "aguacate", "papaya");
console.log(frutas.length); //longitud del array
console.log(frutas[2]); //Imprimir un valor de acuerdo a su posición
springs[2] = "lácteo";
console.log(springs[2]);

//Array de arrays. 

const estados = ["Estado de México", "Jalisco", "Yucatan", "Sonora", "Oaxaca", "CDMX"];
const platillos = ["Guajolocombo", "Torta ahogada", "Panuchos", "Dogos", "Tlayuda", "Tacos"];

const menu = [estados, platillos];

console.log(menu[0][1], menu[1][2]);
console.log(`El ${menu[1][0]} se come en el ${menu[0][0]}`)//console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`); //En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.

//Métodos de Arrays

//Método de cola
/*
Se agregan elementos al final del array y eliminar elementos del inicio del array, FIFO (firs-in-first-out).
Push
Shift
Unshift
*/

const numerosPares = [2, 4, 6, 8, 10, 12, 14];

//Shift

console.log(numerosPares.shift());
console.log(numerosPares);

//Unshift

console.log(numerosPares.unshift(30));
console.log(numerosPares);

//Método de pila
/*
Se agregan elemetos al final del array y eliminar elementos del final del array, LIFO (last-in-first-out)
Push
Pop
*/

//Pop

console.log(numerosPares.pop());
console.log(numerosPares);

//Push

console.log(numerosPares.push(20))
console.log(numerosPares);

//Reverse

console.log(numerosPares.reverse());

//Sort

//Foreach

//Slice

//Splice




