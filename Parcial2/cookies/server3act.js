const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

const sesiones = {
    'abc-123': {nombre: 'Omega', mision: 'Recuperacion de datos'},
    'gdc-123': {nombre: 'Alpha', mision: 'Vigilancia nocturna'}
};

app.get('/omega', (req, res)=>{
    const idDeSesion = 'abc-123';
    res.cookie('sesionId', idDeSesion, {httpOnly:true});
    res.redirect('/');

});

app.get('/alpha', (req, res)=>{
    const idDeSesion = 'gdc-123';
    res.cookie('sesionId', idDeSesion, {httpOnly:true});
    res.redirect('/');
});

app.get('/logout', (req, res)=>{
    res.clearCookie('sesionId');
    res.redirect('/');

})

app.get('/login', (req,res)=>{
    res.send(`
        <h1>Acceso Denegado</h1>
        <p>Por favor, inicia sesion usando una de estas identidades.</p>
        <ul>
            <li><a href = "/alpha">Iniciar como Agente Alpha</a></li>
            <li><a href = "/omega">Iniciar como Agente Omega</a></li>
        </ul>
        `)
})

app.get('/', (req, res)=>{
    const id = req.cookies.sesionId;
    const datosUsuario = sesiones[id];
    if(datosUsuario){
        res.send(`
            <h1>Bienvenido, Agente ${datosUsuario.nombre} </h1>
            <p>Mision actual: ${datosUsuario.mision}</p>
            <hr>
            <h3>Preferencias de interfaz</h3>
            <button id="btnOscuro">Tema Oscuro</button>
            <button id="btnClaro">Tema Claro</button>
            <button id="btnAgencia">Tema de Agencia</button>

            <script>
                const body = document.body;

                const aplicarTema = (tema) => {
                    if(tema ==='oscuro'){
                    body.style.backgroundColor = '#222';
                    body.style.color = '#eee';
                    }if(tema==='claro'){
                        body.style.backgroundColor = '#fff';
                        body.style.color = '#333';
                        }else if(tema === 'agencia'){
                            body.style.backgroundColor = '#333c87';
                            body.style.color = '#fff';
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
                    document.getElementById('btnAgencia').onclick = () => {
                        localStorage.setItem('tema', 'agencia');
                        aplicarTema('agencia');              
                    };
                    


                    const temaGuardado = localStorage.getItem('tema');
                    if(temaGuardado) {
                        aplicarTema(temaGuardado);
                    }
                    
                    
                </script>  
                
                <br><br>
                <input type = "checkbox" id="panel" value="valorCheck">
                <label for="panel"> Mostrar panel de gadgets</label>
                <div id="panelGadgets" style="display:none;">
                    <h1>Panel de Gadgets</h1>
                    <p>Aqui irian tus herramientas secretas</p>
                </div>
                <script>
                    const check = document.getElementById("panel");
                    const msj = document.getElementById("panelGadgets");
                    check.addEventListener("change", () =>{
                        if (check.checked){
                        msj.style.display = "block";
                        }else{
                            msj.style.display="none";
                        }
                    });
                </script>
                <br><br>
                <a href = "/logout">Cerrar sesion</a>


            `
        );

    }else{
        //res.status(401).send('No has iniciado sesion. <a href = "/login">Inicia sesion aqui</a>.');
        res.redirect('/login');
    }


});
app.listen(3000, ()=> console.log('Servidor en http://localhost:3000'));