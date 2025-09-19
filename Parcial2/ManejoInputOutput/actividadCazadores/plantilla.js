class Cazador {
    constructor(nombre, rango, estiloDeRespiracion, misionesCompletadas = 0) {
        this.nombre = nombre;
        this.rango = rango;
        this.estiloDeRespiracion = estiloDeRespiracion;
        misionesCompletadas
    }

    presentarse(){
        console.log(`Hola, yo soy ${this.nombre}, ${this.estiloDeRespiracion}`)
    }

    completarMision(){
        this.misionesCompletadas++;
    }
}