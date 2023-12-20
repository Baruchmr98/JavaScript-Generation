/*
Manipulación del DOM
- Leer y traer nodos del árbol del DOM.
    document.getElementById (Trae elementos por ID)
    document.getElementsByClassName (trae elementos por Class)
    document.getElementsByTagName (trae elementos por Etiquetas)
*/

//getElementsById
const titulo1 =document.getElementById("title1")
console.log(titulo1)
// Para traer el texto que viva dentro
console.log(titulo1.innerText)

//getElementsByClassName
const titulos = document.getElementsByClassName("title")
console.log(titulos)
//Devuelve la longitud de elementos de la clase
console.log(titulos.length)
//Muestra que es un objeto porque es una colección de arrays
console.log(typeof titulos)

//getElementsByTagName
const tituloH3 = document.getElementsByTagName("h3")
console.log(tituloH3)
console.log(tituloH3[0])
console.log(tituloH3[0].innerText)

/*
Métodos para llamar elementos mediante selectores de CSS.
Se usa para procesos más específicos y la sintaxis querySelector
    document.querySelector("selector"); //#, ., <>
    document.querySelectorAll(). Selecciona los elementos que se especifiquen.
Siempre van a traer el primer elemento con el selector indicado.
*/

//querySelector
const queryTitulo4 = document.querySelector("#title4")
console.log(queryTitulo4.innerText)

const queryTitulos = document.querySelector(".title")
console.log(queryTitulos)
console.log(queryTitulos.innerText)

//querySelectorAll
const queryAllTitulos = document.querySelectorAll(".title")
console.log(queryAllTitulos)

//Manipular el style de un elemento del DOM 
titulo1.style.textAlign = "center"


//Manipular el texto de un elemento del DOM
const titulo2 = document.querySelector("#title2")
//titulo2.innerText = "Sesión de manipulación del DOM, CH35"

//Métodos para cear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agregar el nodo".
/*
    Crear nodos. 
        Crea elementos apatir de una etiqueta: document.createElement("element").
        Crea texto dentro de las etiquetas: document.createTextNode("text")
*/

const nodo1 = document.createElement("h4")
//Crear texto que vivirá en el nodo1
const textNodo1 = document.createTextNode("Imagen agregada desde el DOM")

const imgNodo = document.createElement("img")
//Accediendo a las propiedades de la imagen
imgNodo.src = "./src/assets/Octocat.jpg"
imgNodo.alt = "Octocat-gitHub"
imgNodo.width = "300"

/*
    Agregar nodo. Mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda al nodo creado.

        parentElement.appendChild(const) **

        parentElement.append(const)
        parentElement.InsertBefore(const)
        parentElement.insertAdjacentElement(const)
*/
//Obtengo el elemento padre por tag, class o id
const divElement = document.getElementById("dif");

//Inserto el texto en el nodo1 y obtengo una etiqueta h4 con texto.
nodo1.appendChild(textNodo1);

//Inserto nodo1 (<h4> 'Imagen agregada desde el DOM') en el elemento padre (<div>) para obtener un div con una etiqueta h4.
divElement.appendChild(nodo1);

divElement.style.fontFamily = "'Karla', sans-serif"
divElement.style.color = "#A62F03"

//Inserto el imgNodo en el elemento padre 
divElement.appendChild(imgNodo);

/*
Otra forma de leer y modificar nodos
    document.outerHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35"




