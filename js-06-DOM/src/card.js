/*
Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
*/

const user = {
    username: 'baruch moreno romero',
    age: 25,
    email: 'baruchmr98@gmail.com',
    favfilms: ['Interstellar, chicas pesadas, harry potter', 'chicas pesadas']
}

//Crear una función que me permita ingresar el objeto del perfil en el nodo padre
const createUser = (user) => {
    document.getElementById("username").textContent = user.username
    document.getElementById("age").textContent = user.age
    document.getElementById("email").textContent = user.email

/*
Mostrando elementos de lista en forma de lista.
Para mostrar el array en forma de lista utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista
*/
    const ul = document.getElementById("fav-films");
    user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);
   });
//Modificando estilos de la ul para quitar viñetas
   ul.style.listStyleType = "none";
   ul.style.padding = "0";
   ul.style.color = "#"

//Mostrando elementos de lista en forma de fila (no nos sirve porque definimos una lista desordenada 'ul' y no un párrafo)
//document.getElementById("fav-films").textContent = user.favfilms
}

//Invocando la función
createUser(user)

/*
Eventos para actualizar el username mediante el input y el botón
*/

const profileBtn = document.getElementById("btn-main"); //*** 

const inputName = document.getElementById("name")
const userName = document.getElementById("username");

profileBtn.addEventListener("click", () => {
    userName.textContent = inputName.value;
})

const inputAge = document.getElementById("agE");
const age = document.getElementById("age");

profileBtn.addEventListener("click", () => {
    age.textContent = inputAge.value;
} )

const inputPelis = document.getElementById("peliculas");
const pelisFav = document.getElementById("fav-films");

profileBtn.addEventListener("click", () => {
    pelisFav.textContent = inputPelis.value;
} )



