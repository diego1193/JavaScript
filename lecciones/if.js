///// Condicionales if 

if (true) {
    console.log('Hola');
} else {
    console.log('Soy FaLso')
}

// Hola

if (false) {
    console.log('Hola');
} else {
    console.log('Soy FaLso')
}
// Soy FaLso

var edad = 18;
if (edad === 18){
    console.log('Puedes votar, sera tu primera votacion');
} else if (edad > 18) {
    console.log('Puedes votar de nuevo')
}  else {
    console.log('No puedes votar')
}

if (false) {
    console.log('Hola');
}
// No imprime nada


// OPERADOR TERNARIO, if y else en la misma linea
// var vaiable = condidicional? si cumple condicional guarda esto en la variable: si no cumple cindicional esto en la variable

condition ? true : false

var numero = 1;

var resultado = numero === 1 ? "si soy un uno" : 'No soy un uno';