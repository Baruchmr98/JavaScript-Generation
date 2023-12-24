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

//Progrmación asíncrona: 'setTimeout'. Recibe una función anónima y establece un tiempo, en milisegundos, de ejecucción para cumplir con la condición de asincronismo.

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

//--------------------- MÉTODO GET SIN EVENTO --------------------

//Trabajando con promesas mediante Fetch - API
//Metemos la API web en una variable
const url = "https://jsonplaceholder.typicode.com/users"

//Utilizamos la variable para el método fetch
fetch(url)
//Si se cumple la promesa, vamos a traer los datos de la API y se convertirán en tipo json, para poder mostrarlos en consola
.then(data => data.json())
.then(data => {
    console.log(data); //Mostrando en consola todos los usuarios de la API
    console.log(data[0].name); //Mostrando en consola el usuario con el indice 0 y trayendo solamente su nombre
})
.catch(error => console.error("¡Ups! Algo salió mal.", error));

// --------------------- MÉTODO GET ----------------------------

// Usando fetch para mostrar en navegador

//Inicialización de variables
const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");
//Variable para guardar la información que se va a traer desde la API: Debe ser de tipo null.
let post = null;

//Consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users/7")
    .then(response => response.json()) //'response' es la función de respuesta establecida dentro de la función; puede tener cualquier nombre. 
    .then(response => {
        //post = response; //Guardo los datos de response en la variable de tipo null, para modificar el dato.

        //Mandamos a llamar la variable desde la función (aún no se hace, se va a hacer.) (ya la hicimos y ahora la llamamos)

        mostrarDatos(response); //¡ESTE FUE EL ÚLTIMO PASO PARA QUE FUNIONE!
    })

    .catch(error => console.error("¡Problemas!", error));

});
//Función que me permita manipular la variable de tipo null
const mostrarDatos = (holi) => {
    
    //Crear nodos (elementos HTML) y guardarlos en 
    const name = document.createElement("h1");
    const userName = document.createElement("h3");
    const email = document.createElement("p");
    const phone = document.createElement("p");   
    

//Mostrar los elementos creados en el HTML mediante nuestra variable nulla, que le metimos la respuesta en tipo json, haciendo referencia al dato específico a mostrar
name.innerHTML = holi.name;
userName.innerHTML = holi.username;
email.innerHTML = holi.email;
phone.innerHTML = holi.phone;

//Hacer que aparezcan en el navegador

info.appendChild(name);
info.appendChild(userName);
info.appendChild(email);
info.appendChild(phone);
}

//-----------------------MÉTODO GET------------------------------

//Inicialización de variables
const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

//Usando fetch para mostrar en el navegador (mostrar productos) mediante un evento
botonProductos.addEventListener("click", () => {
    fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(response => {
        productos = response;
        mostrarProductos(productos)
    })
    .catch(error => console.error("¡Cuidado!", error));
});

//Función para crear, agregar y mostrar elementos desde el DOM
const mostrarProductos = (productos) => { 

    //El método map toma el array (objeto en JS) y crea nuevos arrays que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach

    productos.map((productos) => {

    //Mando a llamar las llaves de title, price, descrption, category, image desde la API.
    //Creo elementos HTML y los guardo en una variable cada uno
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //Enviar a HTML las variables creadas en las que se almacenaron los elementos de HTML creados.
    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

    //Mostrarlos en navegador
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
    })
}

//----------------------- MÉTODO POST----------------------------

//Método POST utilizando fetch. Crea recursos en la API
fetch("https://jsonplaceholder.typicode.com/posts", {
    //Indicar que es un método de tipo 'POST'
    method: "POST", 
    //Indicar.
    body: JSON.stringify({
        userId: 1986,
        title: "Sueñan los androides con ovejas eléctricas",
        body: "Autor: Phillipe K. Dick"
    }),
        //Definir headers
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
})
//Inicio de las promesas
.then(response => response.json())
.then(json => {
    console.log(json);
})
.catch(error => console.error("Error", error));

//-------------- Programación asíncrona (promesas) --------------

//Función flecha de tipo async-await.
//Indico que es una función asíncrona con la palabra reservada async antes de los parámetros
const getUser = async () => { 
    //Para que se cumpla la promesa, no utilizamos '.then', sino '.try'.
    try{
        //Retardo para que se ejecute mi promesa asíncrona, creando una nueva promesa.
        await new Promise(resolve => setTimeout(resolve, 3000));

        //
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("Error", error);
    }
}

//Invocar función
getUser();

//--------------------- LOCAL STORAGE -------------------------
//Nos permite crear, modificar, eliminar, guardar objetos de JavaScript de manera local.
//Crear un objeto de JS con sus llaves y valores.
const user = [{
    id: 1,
    name: "Baruch",
    apellido: "Moreno",
    email: "baruchmr98@gmail.com",
    posicion: "alumno",
    empresa: "UNAM"
},
{
    id: 2,
    name: "Victor",
    apellido: "Moreno",
    email: "victorCNTE@hotmail.com",
    posicion: "maestro",
    empresa: "SEV"
}];

//Convertir el objeto a notación 'JSON' y almacenarlo en el localStorage
localStorage.setItem("usuario", JSON.stringify(user));

//Traer el objeto 'json' almacenado en el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);

console.log('${user[1].nombre} con posicion ${user[1].posicion}, trabaja en ${user[1].empresa}'); 

//sessionStorage


//---------------------- PRACTICANDO -----------------------------
const jsonString = '{"nombre": "Juan", "edad": 30}';
const objeto = JSON.parse(jsonString);
console.log(objeto);




