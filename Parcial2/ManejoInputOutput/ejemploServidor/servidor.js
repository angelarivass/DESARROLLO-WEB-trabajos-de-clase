const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Metodos.html');
});

app.get('/procesar', (req, res) => { //get sirve para recuoperar info, mas seguro
    const datos = req.query;
    console.log("Datos recibidos por GET:", datos);
    res.send(`Hola ${datos.nombre}! Tu mensaje "${datos.mensaje}" fue recibido por GET.`);
});

app.post('/procesar', (req, res) => {//post sirve para recuperar info y enviarla
    const datos = req.body;
    console.log("Datos recibidos por POST:", datos);
    res.send(`Hola ${datos.nombre}! Tu mensaje "${datos.mensaje}" fue recibido por POST.`);
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});

