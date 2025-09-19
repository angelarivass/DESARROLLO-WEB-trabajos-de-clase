const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/suscribir', (req, res) => {
    const datos = req.body;
    console.log("Datos recibidos por POST:", datos);
    res.send(`Hola! Tu email "${datos.email}" fue recibido por POST.`);
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});