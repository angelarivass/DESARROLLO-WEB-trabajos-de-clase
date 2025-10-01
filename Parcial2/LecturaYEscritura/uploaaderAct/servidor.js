const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const fs = require('fs');
const upload = multer({dest:'uploads/'});



app.get('/', (req,res) =>{
    res.sendFile(__dirname + `/index.html`);
});

app.post('/subir-perfil', upload.single('imagenPerfil'), (req, res) => {
    fs.rename(req.file.path, 'upploads/perfil-de-usuario.png', () => {
        console.log("\nFile Renamed\n");
    });
    return res.json({message: 'Archivo subido con exito!'});


});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});