var valores = ["piedra", "papel", "tijera"]

var maquina = valores[Math.floor(Math.random() * valores.length)]
var value = valores[0]
console.log(`Valor escogido ${value}`)
console.log(`Valor maquina ${maquina}`)
var ganadas = (value === "piedra" && maquina === "tijera") || (value === "papel" && maquina === "piedra") || (value === "tijera" && maquina === "papel")


switch(ganadas){
    case true:
        console.log("Ganaste!! :v");
        break;
    case false:
        if (maquina === value){
            console.log("Vuelve a intentar");
            break;
        }
        else{
            console.log("maquina gana :(");
            break;
        }
    default:
        console.log("Vuelve a intentar")
}

