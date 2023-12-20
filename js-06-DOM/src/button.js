const container = document.querySelector("#container-div");
const boton = document.querySelector("#card-btn");

//Agregando estilos al container para visibilidad
container.style.visibility = "visible"

//Manejando eventos para ocultar el container desde el botón.
boton.addEventListener("click", () => {
    container.style.visibility = (container.style.visibility === "visible") ? "hidden":"visible";
})


