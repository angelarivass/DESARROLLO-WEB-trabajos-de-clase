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
    
    res.json(cazadores);
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});