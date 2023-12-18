console.log("Hola, CH35.")

//if-else
let n = 8;
if (n > 10) {
    console.log(true);
}
else{
    console.log(false);
}

//if-else-if
let edad = 29;
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
let verificacion = n > 20 ? "Si es mayor" : "No es mayor"
console.log(verificacion);


