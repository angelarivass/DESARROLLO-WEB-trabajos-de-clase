const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenido! Esta pagina funciona');
});

app.get('/reporte.lento', (req, res) => {
    console.log('Empezando reporte lento.');

    let suma = 0;
    for (let i = 0; i < 5e9; i++){
        suma+=1;
    }

    console.log('Reporte trabajando!');
    res.send(`Reporte completado. Suma: ${suma})`);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
