function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "🪨"
    } else if(jugada == 2) {
        resultado = "🧻"
    } else if(jugada == 3) {
        resultado = "✂️"
    } else {
        resultado = "NULO"
    }
    return resultado
}

// 1 es Piedra, 2 es Papel, 3 es Tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: 1 para Piedra, 2 para Papel, 3 para Tijera")
    //alert("Elegiste " + jugador)
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))

    // COMBATE
    if(pc == jugador) {
        alert("EMPATE")
    } else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        alert("GANASTE")
        triunfos++	
    } else {
        alert("PERDISTE")
        perdidas++
    }
}

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")