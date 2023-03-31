// Declarativas: Declara una operacion en memoria  permite hsoting

function miFuncion(){
    return 3
}
miFuncion();

// Expresion f(parametros) funcion la declaramos con variable, pero no tiene nombre, no permiten hosting
var miFuncion = function(a, b){

    return a + b;
}

function saludarEstudiantes(estudiante){
    console.log(`Hola_${estudiante}`);
}

saludarEstudiantes('Diego')
miFuncion();

function sumar(a,b){
    return a + b; 
}
/*
    HOSTING:

    ////// SE PUEDE /////////
    miFunccion();

    function miFuncion(){
        return 3;
    }

    /////// NO SE PUEDE //////////
    miFuncion2(E);

    var miFuncion2 = function(param1, param2){
        return 4;
    }
*/