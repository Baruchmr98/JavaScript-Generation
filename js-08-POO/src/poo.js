/* paradigmas de porgramacion

Programacion imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada


Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

Programacion declarativa: Explicar lo que queremos obtener.


Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objeto.

class persona{ 

    constructor (nombre, apellido, edad, email, telefono){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Edad = edad;
        this.Email = email;
        this.Telefono = telefono;
    }

//objetos
//El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
//para inicializar un objeto es necesario definir un constructor que tomara a los atributos 
// clases= molde Objeto = gomita constructor= chefsitx atributos= ingredientes metodos=comportamientos 


comer(){
    console.log("Bon apetit");
}//metodo comer

bailar (){
    console.log("Dale hasta el suelo");
}//metodo bailar 

//No entiendo para que hicimos esto si ya tenemos la clase. Creo que sólo es para mostrar los datos de otra forma.
/*
mostrarInfo(){
    console.log("Nombre: ", this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ", this.edad);
    console.log("Email: ", this.email);
    console.log("Telefono: ", this.telefono);
}
*/
}

let usuario1 = new persona ("Baurhc", "Moreno", 25, "baruchmr98@gmail.com", 2283047320)
let usuario2 = new persona ("Sandra", "Moreno", 25, "baruchmr98", 2325435354)
let usuario3 = new persona ("Julia", "ochoa", 45, "holagg@hotmail.com", 298329879)
let usuario4 = new persona ("Lourdes", "villareal", 32, "sisisnono@gmail.com", 87628764);

console.log(persona)
console.log(usuario1)
console.log(usuario1.Edad)
console.log("Edad: " + usuario1.Edad)

//usuario1.mostrarInfo()
usuario1.comer()

//-------------------- SUBCLASE -----------------------

//------------------- POLIMORFISMO --------------------
class animal {
    constructor(pelaje, numPatas) {
        this.Pelaje = pelaje;
        this.NumeroPatas = numPatas;
    }

    mostrarDatos(){
        console.log()
        console.log()
    }
}


//------------------ ENCAPSULAMIENTO ---------------------


//------------------ OBJETOS JSON -----------------------


//--------------------- PRÁCTICA ----------------------
class Alumno {
    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion(){
       console.log(this.calificacion);
    }
    
    evaluacion(){
        
        const resultado = this.calificacion >= 6 ? 'Aprobaste' : 'Reprobaste';
        console.log(resultado);

        /*If-Else
        if (this.calificacion >= 6 && this.calificacion < 9) {
        console.log('Aprobaste');
        } 
        else if (this.calificacion >= 9) {
        console.log('¡Eres increíble!');
        }
        else {
            console.log('Reprobaste')
        }*/
    }
}

let Alumno1 = new Alumno ("Rene", 9);
let Alumno2 = new Alumno ("Abi", 4);
let Alumno3 = new Alumno ("Karen", 10);
let Alumno4 = new Alumno ("Baruch", 10);
let Alumno5 = new Alumno ("Eunice", 2);
let Alumno6 = new Alumno ("Oswaldo", 20);
let Alumno7 = new Alumno ("Montse", 8);
let Alumno8 = new Alumno ("Emiliano", 7);
let Alumno9 = new Alumno ("David", 1);

//console.log(Alumno1, Alumno2, Alumno3, Alumno4, Alumno5, Alumno6, Alumno7, Alumno8, Alumno9);
Alumno1.imprimirCalificacion();
Alumno1.evaluacion();
Alumno2.imprimirCalificacion();
Alumno2.evaluacion();
Alumno3.imprimirCalificacion();
Alumno3.evaluacion();
Alumno4.imprimirCalificacion();
Alumno4.evaluacion();
Alumno5.imprimirCalificacion();
Alumno5.evaluacion();
Alumno6.imprimirCalificacion();
Alumno6.evaluacion();
Alumno7.imprimirCalificacion();
Alumno7.evaluacion();
Alumno8.imprimirCalificacion();
Alumno8.evaluacion();
Alumno9.imprimirCalificacion();
Alumno9.evaluacion();
