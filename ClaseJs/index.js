// 1. Importar el paquete de express
const express = require('express');

//2. Crear una instancia de la aplicacion Express
const app = express();

//3. Definir el puerto por el que correra el servidor
const port = 3000;
app.get('/', (req, res) =>{
    res.send('Hola Mundo con Express!');
});

app.get('/acerca', (req, res) =>{
    res.send('Esta es la pagina "Acerca dev"');
});

app.listen(port, () => {
    console.log(`Servidor corriendo exitosamente en http://localhost:${port}`);
});