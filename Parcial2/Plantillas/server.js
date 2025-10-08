const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('inicio', { usuario: 'Invitado'});
});

const fs = require('fs');
app.use((req, res, next) => {
    const log = `[${new Date().toString()}] ${req.method} ${req.url}\n`;

    fs.appendFile('server.log', log, (error) => {
        if (error) console.log("Error al escribir en el log.");
    });
    next();
});
app.get('/perfil/:id', (req, res) => {
    const usuario = undefined;
    res.render('perfil', { nombre: usuario.nombre});
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));