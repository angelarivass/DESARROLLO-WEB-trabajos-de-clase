const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const fetch = require('node-fetch');

app.get('/', (req,res) =>{
    res.sendFile(__dirname + `/index.html`);
});

app.post('/apiAction', async (req,res) => {
    const info = req.body; //cuerpo del input
    const url = info.apiInput; //es el name que puse en input type text en el html

    
        try{
        console.log("\nRecibiendo datos");
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log("Datos recopilados del URL:", datos.value);
        }catch(error){
        console.error("Ha ocurrido uin error:", error);
        }
    });

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});