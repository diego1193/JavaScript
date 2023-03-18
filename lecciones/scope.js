// Scope Global y escope Local
var miNombre = "Diego"; // Variable Global

function nombreApellido(){
    var miApellido = "Cabrera"; // Variable Local
    return miNombre + " " + miApellido; 
}

nombreApellido();// Dentro de la fucnion se puede acceder a la variable <miApellido>
console.log(miNombre); // No se puede acceder a la variable <miNombre> ya q solo podra ser utilizada dentro de la funcion q fue declarada
