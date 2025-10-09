const puntuacionTotal = 100;
let bonoActivo = true;

function agregarPuntosPorNivel(puntos){
    puntuacionTotal = puntuacionTotal + puntos;
    console.log(`Puntuacion despues del nivel: ${puntuacionTotal}`);
}

function aplicarBono(){
    let puntosConBonus = 0;
    let bonoActivo = false;

    if(bonoActivo){
        puntosConBonus = puntuacionTotal * 1.25;
        console.log(`Bono aplicado. Puntuacion con bonus: %{puntosConBonus}`);
    } else {
        console.log("No hay bono activo.");
    }
}

let puntuacionNivel = agregarPuntosPorNivel(50);
aplicarBono();
let puntuacionFinal = puntosConBonus;
console.log(`Puntuacion final: ${puntuacionFinal}`);