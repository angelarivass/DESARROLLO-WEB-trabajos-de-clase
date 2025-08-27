let puntuacionTotal = 100;
let bonoActivo = true;

function agregarPuntosPorNivel(puntos){
    puntuacionTotal = puntuacionTotal + puntos;
    return puntuacionTotal;
}

function aplicarBono(){
    let puntosConBonus = 0;
    if(bonoActivo){
        puntosConBonus = puntuacionTotal * 1.25;
        return puntosConBonus;
    } else {
        return puntuacionTotal;
    }
}

let puntuacionNivel = agregarPuntosPorNivel(50);
aplicarBono();
let puntuacionFinal = aplicarBono();
console.log(`Puntuacion final: ${puntuacionFinal}`);