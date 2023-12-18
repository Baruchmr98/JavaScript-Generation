//EJERCICIOS
//Convertir Celsius a Fahrenheit
const temperaturasCelsius = [22, 25, 19, 30, 27, 21, 18];
const temperaturasFahrenheit = [];

function celsiusToFahrenheit (C) {
    return C * (9/5) + 32;
}

for(let i = 0; i < temperaturasCelsius.length; i++) {
    temperaturasFahrenheit.push(
        celsiusToFahrenheit(temperaturasCelsius[i])
        )
}

const temperaturasCelFah = [temperaturasCelsius, temperaturasFahrenheit]
console.log(temperaturasCelFah)

//Sumatoria acumulada.
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i; 
    console.log(suma)
}

//Números primos

//let numIngresado = parseInt(prompt("Ingresa un número primo y, en seguida, te lo confirmaremos o negaremos:"))
let numIngresado = 49

function numPrimo (numero){
    for (let i = 2; i <= Math.sqrt(numero); i ++){
    if(numero % i == 0){
        return "No es un numero primo. Vuelve a intentarlo."
        }
    }
    return "Es un numero primo."
}

console.log(numPrimo(numIngresado))
//alert(numPrimo(numIngresado))


//Secuencia Fibonacci
let Fibonacci = 10;
let arrayFibonacci = [0, 1];

function numFibonacci (Fibonacci) {
    while (arrayFibonacci.length < Fibonacci) {
        arrayFibonacci.push(arrayFibonacci[arrayFibonacci.length - 1] + arrayFibonacci[arrayFibonacci.length -2])
    }
    return arrayFibonacci; 
}

console.log(numFibonacci(Fibonacci))





