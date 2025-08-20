const express = require('express');
const app = express();
const port = 3000;

const usuarios = [
    { id: 1, nombre: 'Ana Gomez', email: 'ana@example.com'},
    { id: 2, nombre: 'Carlos Ruis', email: 'carlos@example.com'},
    { id: 3, nombre: 'Sofia Lara', email: 'sofia@example.com'}
];
const productos = [
    { id: 1, nombre: 'Crema', precio: 30 },
    { id: 2, nombre: 'Cepillo', precio: 60}
];

app.get('/', (req, res) => {
    res.send('Bienvenido a mi primer API con Express! Visita /api/usuarios para ver los datos.');
});

app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

app.get('/api/productos', (req, res) =>{
    res.json(productos);
});

