const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

const sesiones = {
    'abc-123': {nombre: 'Ricardo Gonzalez', profesion: 'Profesor de desarrollo web.'}
};

app.get('/login', (req, res)=>{
    const idDeSesion = 'abc-123';
    res.cookie('sesionId', idDeSesion, {httpOnly:true});
    res.send('Has Iniciado sesion! Ahora puedes ira a la pagina principal.');
});

app.get('/', (req, res)=>{
    const id = req.cookies.sesionId;
    const datosUsuario = sesiones[id];

    if(datosUsuario){
        res.send(`
            <h1>Bienvenido, ${datosUsuario.nombre}</h1>
            <p>Profesion: ${datosUsuario.profesion}</p>
            <button id="btnOscuro">Modo Oscuro</button>
            <button id="btnClaro">Modo Claro</button>
            
            <script>
                const body = document.body;

                const aplicarTema = (tema) => {
                    if(tema ==='oscuro'){
                    body.style.backgroundColor = '#222';
                    body.style.color = '#eee';
                    }else{
                        body.style.backgroundColor = '#fff';
                        body.style.color = '#333';
                        }
                    };
                    
                    document.getElementById('btnOscuro').onclick = () => {
                        localStorage.setItem('tema', 'oscuro');
                        aplicarTema('oscuro');              
                    };
                    document.getElementById('btnClaro').onclick = () => {
                        localStorage.setItem('tema', 'claro');
                        aplicarTema('claro');              
                    };

                    const temaGuardado = localStorage.getItem('tema');
                    if(temaGuardado) {
                        aplicarTema(temaGuardado);
                    }
                </script>                   
            `);
    } else{
        res.status(401).send('No has iniciado sesion. <a href = "/login">Inicia sesion aqui</a>.');
    }
});

app.listen(3000, ()=> console.log('Servidor en http://localhost:3000'));