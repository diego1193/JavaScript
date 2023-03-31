// Lamar variables o funciones sin haberlas declarado

// ******************** Variables ****************************
console.log(miNombre)

// Compilador cuando encuentra una variable q no este declada la declara y le asigna undifined

var miNombre;
miNombre = "Diego"; // Luego ya toma el valor de la variable q nosostros asignamos

// ******************** Funciones ***************************************
hey();

function hey(){
    console.log("Hola " + miNombre);
}

// ************ Error de hoisting ******************************
// Primero declara funciones y despues variables si se llama primero la funcion, por eso arroja <Hola undefined>
// Buenas practicas de primero funciones y despues llamarlas, para evitar hosting con variables y funciones
hey(); 

function hey(){
    console.log("Hola " + miName);
}

var miName = "Mauricio"