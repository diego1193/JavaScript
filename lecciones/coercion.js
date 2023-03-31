// Coercion: la forma en la q podemos cambiar un valor a otro

// Coercion implicita: es cuando el lenguaje nos ayuda a cambiar cualquier tipo de valor

var a = 3 + "7" // Implicitamente cree q es una concatenacion de strings
// Rta: 37 tyoeof -> String

var b = 3 * "2" // Implicimente cree q es una operacion aritmetica(multiplicacion)
// Rta: 6 typeof -> Number

// Coercion explicita, obligamos a q cambie de valor

var a = 20;
typeof a
// 'number'

var b = a + "";
typeof b
// 'string'

var c = String(a)
typeof c
// 'string'

var d = Number(c)
typeof d
// 'number'