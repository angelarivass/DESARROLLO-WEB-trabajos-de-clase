const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/saludar', (req,res) =>{
    const nombre = req.query.nombre;
    if(nombre){
        res.cookie('usuario', nombre, {maxAge: 900000, httpOnly: true});
        res.send(`Hola ${nombre}! Hemos guardado tu nombre.`);
    }else {
        res.send('por favor, dime tu nombre usando ?nombre=TU_NOMBRE');
    }
});

app.get('/', (req,res)=>{
    const nombreUsuario = req.cookies.usuario;

    if (nombreUsuario){
        res.send(`Te recuerdo! Eres ${nombreUsuario}`);
    } else{
        res.send('Hola te extraño. no se quien eres. Ve a /saludar para presentarte.');
    }

});
app.listen(3000, () => {
    console.log(`Servidor en http://localhost:3000`);
});
