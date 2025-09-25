const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json()); 

app.use(cookieParser());
const path = require('path');


const productosDisponibles = [
    {id: 1, nombre: 'camiseta'}, 
    {id: 2, nombre: 'pantalon'},
    {id: 3, nombre: 'calcetas'},
    {id: 4, nombre: 'tenis'},
    {id: 5, nombre: 'vestido'}
]

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/productos', (req, res) => {
    res.json({
        mensaje: "Lista de productos",
        productos: productosDisponibles
    });
});

app.post('/comprar', (req, res) => {
    const productosComprados = req.body;

    console.log(`Se recibio la compra de los productos: ${JSON.stringify(productosComprados)}`);

});



app.listen(3000, ()=> console.log('Servidor en http://localhost:3000'));