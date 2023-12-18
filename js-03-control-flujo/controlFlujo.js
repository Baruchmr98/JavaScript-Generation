//Control de flujo
/*
Tomar decisiones basadas en condiciones especificas, esto produce un codigo tanto dinamico como adaptable
Repetir acciones (estructuras de bucle) para iterar operaciones o procesar datos de una forma eficiente sin caer en la redaccion de codigo innecesario y repetitivo
Facilitar el control de flujo de una operacion, brindandonos la oportunidad de ser especificos en indicar qe instrucciones ejecutar y en que orden
*/

//if-else
let n = 8;
if (n > 10) {
    console.log(true);
}
else{
    console.log(false);
}

//if-else-if. Se anidan varias veces una misma sentencia.
let edad = 28;o
if (edad < 18) {
    console.log("Eres menor de edad, retírate");
}
else if (edad >= 18 && edad < 65) {
    console.log("Adelante");
}
else {
    console.log("Eres viejito");
}

//switch
let dia = "martes";
switch (dia) {
    case "lunes" :
        console.log("Odio los lunes 🥲");
        break;
    case "martes" :
        console.log("Día de cafesito 🥳");
        break;
    case "miercoles" :
        console.log("Promo de Alitas 😛")
        break;
    case "jueves" :
        console.log("Jueves de hamburguesa 🤗");
        break;
    case "viernes" :
        console.log("SSSIUUUUUU");
        break;
    case "sabado" :
        console.log("Gym y salidita");
        break;
    case "domingo" :
        console.log("De mercadito");
        break;
    default:
        console.log("Día desconocido");
        break;
}

//operador terniario
/*
Es una expresión if-else más simple y legible. 
Se usa principalmente para simplificar condiciones de una sola expresión.
*/

let verificacion = n > 20 ? "Si es mayor" : "No es mayor"
console.log(verificacion);

