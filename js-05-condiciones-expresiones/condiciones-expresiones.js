//OPERADORES ARITMÉTICOS
let numero1 = 10;
let numero2 = 8;

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicacion = numero1 * numero2;
division = numero1 / numero2;
residuo = numero1 % numero2;
incremento = numero1;
decremento = numero2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(residuo);
console.log(incremento);
console.log(decremento);

/*
Aplicación de descuento
*/

let precioReal = 1000;
let porcentajeDescuento = 20;

let cantidadDescuento = (precioReal * porcentajeDescuento)/100;
let precioDescuento = precioReal - cantidadDescuento;

console.log("Precio Real: $" + precioReal);
console.log("Porcentaje de descuento: " + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento: $" + precioDescuento); 

//OPERADOR DE ASIGNACIÓN
/*
(=)
*/

//OPERADORES DE COMPARACIÓN
/*
(==) compara si los valores son iguales.
*/

let num3 = 10;
let texto = "10";

console.log(num3 == texto);

/*
(===) compara los tipos de datos y valores de variables. Igualdad estricta
*/

let num4 = 10;
let texto1 = "10";

console.log(num4 === texto1);

/*
(!=): Desigualdad. Verifica si dos valores no son iguales y, de ser necesario, realiza la conversion
*/

let precioCaja = 1499;
let precioMaximo = 1500;

if (precioCaja != precioMaximo){
console.log("El precio del producto no es igual al precio máximo");
} 
else {
    console.log("El precio del producto es igual al precio maximo permitido");
}

let numero5 =10;
let numero6 = "15";

if(numero5 != numero6) {
    console.log("Son diferentes");
}
else {
    console.log("Los valores son iguales");
}

/*
(!==) Desigualdad estricta. Verifica si dos valores no son iguales. Ambos valores deben tener el mismo tipo y valor
*/

let numero7 =41;
let numero8 = "50";

if(numero7 !== numero8) {
    console.log("Los valores son diferentes");
}
else{
    console.log("Los valores son iguales");
}

/*
(>) Indica si un valor es mayor que otro.
*/

let puntuacionFinal = 85;
let puntuacionRequerida = 102;

console.log(puntuacionFinal > puntuacionRequerida);

/*
(<) Indica si un valor es menor que otro.
*/

console.log(puntuacionFinal < puntuacionRequerida);

/*
(>=) Indica si un valor es mayor o igual que otro.
*/

console.log(puntuacionFinal >= puntuacionRequerida);

/*
(<=) Indica si un valor es menor o igual que otro.
*/

console.log(puntuacionFinal <= puntuacionRequerida);

//OPERADORES LÓGICOS
/*
(&&) AND; Concatena condiciones
*/

let mayoriaEdad = 18;
let identificacion = true;

if (mayoriaEdad >= 18 && identificacion) {
    console.log("Puedes rentar")
}
else {
    console.log("No puedes rentar")
}

/*
(||) Cuando se debe cumplir una condicion u otra.
*/

let esPrime = false;
let descuento = true

if(esPrime || descuento) {
    console.log("Califica para descuento")
}
else{
    console.log("No califica para descuento")
}

/*
(!) Niega el valor de una condición
*/

let esLibre = false

if(!esLibre){
    console.log("Se trabaja.")
}
else{
    console.log("Descansito.")
}

//OPERADORES DE CADENA
/*
'toLowerCase' Cambia el string a minúsculas
*/

let mensajeUser = "BIENVENIDO A LA TIERRA"
let cambioMin = mensajeUser.toLowerCase()

console.log(cambioMin)

/*
'toUpperCase' Cambia el string a mayúsculas
*/

let mensajeUser2 = "bienvenido a la tierra"
let cambioMay = mensajeUser2.toUpperCase()

console.log(cambioMay)

/*
'trim' Quita los espacios del string
*/

let aviso = " Hey    , ¿por qué no vas?   "
let sinEspacios = aviso.trim()

console.log(sinEspacios)

/*
'toString' Number a String
*/

let numero10 = 31
let cadenas = numero10.toString()

console.log(cadenas)

/*
'concat'
*/

let nombre = "Fernanda";
let apellido = "Ramos";
let nombreCompleto = nombre.concat(" ", apellido)

console.log(nombreCompleto)

//EXPRESIONES











