const emailInput = document.getElementById("email");
const submitBoton = document.getElementById("btn-submit");
//REGEX: Expresiones regulares. Determinan patrones que se deben cumplir.
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Deshabilitar el botón
submitBoton.disabled = true;

/*
EVENTO para el input. Se evaluará "el patrón de expresión regular" y, en caso de cumplir con el patrón, se habilitará el botón. Y podremos ser redirigidos a la página index.html
- Se obtiene el valor actual del campo email (input) usando 'e.target.value' y se almacena en una variable (text).
- Se evalúa la REGEX
 */

emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitBoton.disabled = false;
    }
    else{
        submitBoton.disabled = true;
    }
})


