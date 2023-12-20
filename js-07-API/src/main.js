//Programación sincrónica
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();

//Progrmación asíncrona: 'setTimeout'. Recibe una función anónima y establece un tiempo ,en milisegundos, de ejecucción para cumplir con la condición de asincronismo.

/*
const twoAsync = () => {
    setTimeout( () => {
        console.log("dos Async");
    }, 5000)
}

const oneAsync = ()  => {
    setTimeout(function(){
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}

oneAsync();
*/


/*
Trabajando con promesas mediante Fetch - API
*/
const url = "https://jsonplaceholder.typicode.com/users"

//Usando Fetch
fetch(url)
//Si se cumple la promesa, vamos a traer los datos de la API y se convertirán en tipo json, para poder mostrarlos para mostrarlos en consola
.then(data => data.json())
.then(data => {
    console.log(data); //Mostrando en consola todos los usuarios de la API
    console.log(data[0].name); //Mostrando en donsola el usuario con elindice 9 y trayendo solamente su nombre
})
.catch(error => console.error("¡Ups! Algo salió mal.", error));





