// Ciclo for. Repite un ciclo hasta que la condición se evalúe como false. Crea 3 expresiones opcionales: inicialización, condición, actualización. 
/*
Se inicia el ciclo con la creación de una variable. 
Posteriormente, se crea una condición a cumplirirse por la variable inicializada; si no la cumple, el bucle termina.
> Actualización. Son los datos que cambian la variable inicial mientras cumpla la condición.
*/

//Programa para saber cuantos boletos vendemos en una rifa.
for(let boleto =1; boleto <= 15; boleto++) {
    console.log(`Boleto # ${boleto}`);
}

//Programa para vender bolos con una variable global
let bolos = 1;

for(bolos; bolos <= 20; bolos++) {
    console.log(`Vendí ${bolos}`);
}

//Cuenta regresiva
let cuentaReg = 15;

for (cuentaReg; cuentaReg >= 0; cuentaReg--) {
    console.log(cuentaReg);
}

//Recorrer arrays 
/*
Con 'for'
*/

const colores = ["amarillo", "azul", "verde", "morado", "naranja", "rojo", "lila"];

for(let i = 0; i < colores.length; i++){
    console.log(colores[i]);
}

/*
Con 'forOf' nos permite recorrer el objeto (array) y devuelve el valor
*/

/*
Con 'forIn' nos permite recorrer el objeto (array) y devuelve su posición (indices)
*/

const objetos = [
    "mesa",
    "silla",
    "escritorio", 
    "computadora", 
    "biblia"
];

for(let objeto in objetos) {
    console.log(objeto + objetos[objeto]);
}

/*
Con 'forEach'
*/

//Sumar numero del 1 al 20
let suma = 0;
for(let i =1; i <=30; i++){
    suma += i;
}
console.log(suma);

//Tabla del 5
const tabla=5;
for(let i = 1; i <= 10; i++){
    let resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}

//Ciclo While
/*
Recorre un bloque de código siempre que una condición específica sea verdadera.
*/

//Venta de productos
let productos = 5;
while(productos > 0) {
    console.log(productos + " productos vendidos");
    productos--;
}

//Imprimir numeros
let num1 = 0;
while(num1 < 10) {
    num1 ++
    console.log("El numero es " + num1);
}


























