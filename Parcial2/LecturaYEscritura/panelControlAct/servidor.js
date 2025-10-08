const express = require('express');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');


const fs = require('fs');
app.use(cookieParser());

class ServidorVirtual {
    constructor(id, nombre, estado, path){
        this.id = id;
        this.nombre = nombre;
        this.estado = false;
        this.path = path;
    }

}//encender, apagar, respaldar, guardarlog agregar adminid

app.get('/', (req,res) =>{
    let usuarioID = req.cookies.usuarioID;

    if(usuarioID){
        res.send(`Hola, bienvenido otra vez! ID de admin: ${usuarioID}`);

    }else{
        usuarioID = crypto.randomUUID();
        res.cookie('usuarioID', usuarioID, {httpOnly:true} );
    }
});

app.get('/cookie-ex', (req, res) => {
    res.sendFile(__dirname + `/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});






