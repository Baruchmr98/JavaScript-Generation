//comentario lineal
/*comentario multilinea*/

//alert("Hola mundo");
//console.log("Este es un mensaje para mi consola");
//prompt("Ingresa tu nombre, porfavor.")

/*var nombre = prompt("Ingresa tu nombre, porfavor.");
alert("Hola, " + nombre + ". Bienvenido a la ch35.");*/

// var numero1 = parseInt(prompt("Ingresa el primer número: "));
// var numero2 = parseInt(prompt("Ingresa el segundo número: "));

// console.log("Suma: " + (numero1 + numero2))
// console.log("Resta: " + (numero1 - numero2))
// console.log("Multiplicación: " + (numero1 * numero2))
// console.log("División: " + (numero1 / numero2))


// var edad = parseInt(prompt("Ingresa tu edad, va?: ")); 
// alert("¿" + (edad>18) + "?" + " Uy no, muchache. Regrésate.");



//con encasillamiento
/*
let numeroEncasillado= Number = 5;
let textoEncasillado = String = "hola";
*/

// console.log(typeof());

// conversion de string a number. 
/*
let funcionNumber = console.log(typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt (nombre));
metodoParseInt = console.log(typeof parseFloat (nombre));
*/

// conversion number a string.
/*
String(x);
x.tostring();

console.log(typeof (x));
console.log(typeof (x));
*/

// conversion de  a  
/*
let numero = Number(esMayorEdad);
console.log(typeof(numero));
*/

//
/*
let texto = String(esMayorEdad);
console.log(typeof(texto));

let negacion = !esMayorEdad;
console.log(negacion);
*/





//concatenar es unir strings/variables
/*
let saludo = "HolaAaaAaaa. ";
let frase = "Que o q";

texto= saludo + frase
document.write(texto);
*/

/*
let firstName;
firstName = 'Daniel';
let lastName = 'Maldonado';

console.log(firstName + " " + lastName);
console.log("Mi nombre es " + firstName + " y mi apellido es " + lastName);
*/

/* interpolacion de cadenas
> backticks ``
> Variables ${}
> texto para strings*/

/*
let age = 37
console.log(`Mi nombre es ${firstName}, mi apellido es ${lastName} y tengo ${age} años`);
*/

// console.warn();
/*
console.warn(`Precaucion, no es buena practica dejar sin punto y coma`);
*/

//console.error();
/*
console.error(`Status 404: Failed`);
*/

/*Array. Arreglo; es un tipo de dato que pertenece a JS, en el cual se almacenan una colección de elementos de manera ordenada. 
- Se pueden manipular mediante metodos específicos.
- Los lementos de un array se contabilizan como indices, empezando por indice 0. Por lo cual, el primer elemento del array posee el indice 0.
- Posee n cantidad de elementos.
- Se declaran como variables, seguido del signo igual y corchetes. Dentro ded cada corchete vive un elemento con un tipo de dato.
*/

let arreglo1 = [] //array vacío 
console.log(`Array vacío ${arreglo1}`); //Los elementos de un array se separan mediante comas ','

let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; //de strings
console.log(cars);

// longitud e indice son diferentes. la longitud es el numero de elementos; y el indice corresponde a cada elemento a partir del 0.

console.log(typeof(cars));
let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15300, 17000, 17200];

/*
Objetos. Son tipos de datos en JS, con una estructura definida que nos permite almacenar informacion mediante llaves (claves) y valores.
Su sintaxis es la siguiente:
const object = {
    clave1: valor 1 (dato1),
    clave2: valor 2 (dato2)
}
Pueden almacenar diferentes tipos de valores.
*/

const employee = {
    firstName: "Rey David",
    lastName: "Martínez",
    age: "29",
    country: "México"
}
