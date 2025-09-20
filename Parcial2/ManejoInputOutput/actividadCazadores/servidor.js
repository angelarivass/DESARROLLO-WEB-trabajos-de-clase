const express = require('express');
const app = express();
const port = 3000;

class Cazador {
    constructor(nombre, rango, estiloDeRespiracion, misionesCompletadas = 0) {
        this.nombre = nombre;
        this.rango = rango;
        this.estiloDeRespiracion = estiloDeRespiracion;
        this.misionesCompletadas = misionesCompletadas;
    }

    presentarse(){
        console.log(`Hola, yo soy ${this.nombre}, ${this.estiloDeRespiracion}`)
    }

    completarMision(){
        this.misionesCompletadas++;
    }
}

class SedeCazadores{
   constructor(){
        this.cazadores = [];
   }
    enviarAMision(nombreCazador, nombreDemonio){

        try {
            const cazadorEnviado = this.cazadores.find(cazador => cazador.nombre === nombreCazador);
            if (!cazadorEnviado){
                throw new Error("Cazador not found.");
            }
            if (cazadorEnviado.rango !== 'Hashira'){
                throw new Error("¡Misión demasiado peligrosa! Requiere rango Hashira.");
            }
            cazadorEnviado.completarMision();
            console.log(`Mision completada con exito por el cazador ${nombreCazador}.`);
            
        } catch (error) {
            console.error(`Mision incompleta: ${error.message}`);
        }
    }
}
//ya no supe como implementar la sede en el front
app.use(express.urlencoded({ extended: true }));

let cazadores = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/registro.html');
});
//
app.post('/registrar', (req, res) => {
    const datos = req.body;
    const nuevoCazador = new Cazador(datos.nombre, datos.rango, datos.estiloDeRespiracion);
    cazadores.push(nuevoCazador);
    nuevoCazador.presentarse();
    res.json(cazadores);
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});