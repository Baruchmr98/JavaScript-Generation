//EJERCICIOS
//Ejercicio 1
/*
Elabora un programa que determine si una persona tiene edad suficiente para votar. Debe recibir como parametro la edad
*/
let edadVotar = 18;
if (edadVotar < 18) {
    console.log("No se puede, lo siento.");
}
else {
    console.log("Trata de no venderlo, porfi.")
}

//Ejercicio 2
/*
Desarrolla un programa que evalue si un numero es divisible entre 7 y 8
*/

let numero = 7;
if (numero % 7 == 0 && numero % 8 ==0) {
    console.log("Verdadero");
}
else {
    console.log("False");
}
// Casos de prueba: 56 (v), 7(f), 8(f), 0(v), 224(v), 73(f)

//Ejercicio 3
/*
Desarrolla un programa que evalue si un numero es divisible entre 4 o 9.
*/
let numero2 = 3;
if (numero2 % 4 == 0 || numero2 % 9 == 0) {
    console.log("Verdadero");
}
else {
    console.log("Falso");
}

//Ejercicio 4
/*
Realizar un programa que reciba como parametro una categoria de peliculas:
-accion
-drama
-comedia
-romance
-suspenso
-terror
Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula de acuerdo al parametro recibido
*/
let categoria = "accion";
switch (categoria) {
    case "accion" :
        console.log("rápidos y furiosos")
        break;
    case "drama" :
        console.log("no she")
        break;
    case "comedia" :
        console.log("no she x2")
        break;
    case "romance" :
        console.log("no she x3")
        break;
    case "suspenso" :
        console.log("no she x4")
        break;
    case "terror" :
        console.log("La bruja de blair")
        break;
    default:
        console.log("No encontrado")
        break;
}

//Ejercicio 5
/*
Crear una interfaz de un cajero ATM

Debe recibirse como parametro alguna de las siguientes opciones
1. Retirar dinero
2. Transferencia
3. Deposito
4. Pago de servicios
Segun sea la opcion indicada, imprimir en pantalla la accion a realizar.
Utilizar if/else
*/
let acciones = "pago";
switch (acciones) {
    case "retiro" :
    console.log("retirar dinero");
    break;
    case "transferencia" :
        console.log("transferir");
        break;
    case "deposito" :
        console.log("depositar");
        break;
    case "pago" :
        console.log("pagar servicios");
        break;
    default:
        console.log("Intentalo de nuevo");
        break;
}



//Ejercicio 6
/*
Escribir en codigo un programa conversor de divisas

Debe recibir como parametro una cantidad en pesos mexicanos y, segun sea la opcion que se indique, realizar la conversion correspondiente
1. A dolares estadounidenses
2. A euros 
3. A yenes japoneses
4. A libra esterlina
5. A franco suizo
*/

const divMex = 100;
let divConver = "dollar";
switch (divConver) {
    case "dollar":
        console.log(divMex * 0.058);
        break;
    case "euro":
        console.log(divMex * 0.054);
        break;
    case "yen":
        console.log(divMex * 8.41);
        break;
    case "libra":
        console.log(divMex * 0.046);
        break;
    case "franco":
        console.log(divMex * 0.051);
        break;
    default:
        console.log("Ponele algo bueno, muchacho.");
        break;
};










