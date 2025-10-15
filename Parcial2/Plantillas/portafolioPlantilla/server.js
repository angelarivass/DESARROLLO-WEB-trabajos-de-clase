const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const proyectos = [
        { titulo: 'Sinergia', descripcion: 'Proyecto sustentable en Ensenada.', tecnologia: 'react', link: 'link'},
        { titulo: 'TrackMed', descripcion: 'Plataforma para centralizar estudios', tecnologia: 'quien sabe', link: 'link'},
        { titulo: 'Proyecto 3', descripcion: 'Aplicación', tecnologia: 'quien sabe', link: 'link'}
    ];
    res.render('portafolio', { listaProyectos : proyectos })
});


app.listen(3000, () => console.log('Servidor en http://localhost:3000'));