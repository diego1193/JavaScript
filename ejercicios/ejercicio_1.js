
var valores = ['Piedra', 'Papel', 'Tijera'];

// Math.random() -> valor ramdom de 0 a 1, 0,1, o 0,5 etc...
// Math.floor(Decimal) -> Aproxima los decimales
// Al multuplicar un numero decimal q vaya de 0 a 1, por la longitud de la lista 2(3)
// va a dar divisiones aleatorias con resultados menores o iguales con respecto a longitud de la lista
// luego aprimamos el valor del resultado a entero y buscamos la posicion en la lista
var maquina = valores[Math.floor(Math.random() * valores.length)]

var jugarConMaquina = function(valor_ingresado, valor_maquina){
    return valor_ingresado === valor_maquina ? 'Le ganaste a la maquina': 'Perdiste contra la maquina';
}

console.log(jugarConMaquina(valores[0], maquina));