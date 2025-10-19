const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const dbURI = "mongodb+srv://arivas_db_user:TzzunWIvZ5FMOiU1@cluster0.yoeo2xy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

//middleware 
app.use((req, res, next) => {
  const log = `[${new Date().toString()}] ${req.method} ${req.url}\n`;
  fs.appendFile('server.log', log, (error) => {
    if (error) console.log("Error al escribir en el log.");
  });
  next();
});

//conexión a mongo
mongoose.connect(dbURI)
  .then(() => console.log('Conexión exitosa a la base de datos!'))
  .catch(err => console.error('Error de conexión:', err));

//esquema
const cazadorSchema = new mongoose.Schema({
  nombre: String,
  respiracion: String,
  rango: { type: String, default: 'Mizunoto' }
});

const Cazador = mongoose.model('Cazador', cazadorSchema);

// Rutas
app.get('/', async (req, res) => {
  const cazadores = await Cazador.find({});
  res.render('cazadores', { cazadores });
});

app.post('/registrar', async (req, res) => {
  try {
    const nuevoCazador = new Cazador({
      nombre: req.body.nombre,
      respiracion: req.body.respiracion
    });
    await nuevoCazador.save();
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error al registrar el cazador.');
  }
});

app.post('/actualizar', async (req, res) => {
  try {
    await Cazador.updateOne(
      { nombre: req.body.nombre },
      { respiracion: req.body.respiracion }
    );
    res.send('Cazador actualizado correctamente!');
  } catch (error) {
    res.status(500).send('Error al actualizar el cazador.');
  }
});

app.get('/leer', async (req, res) => {
  try {
    const todos = await Cazador.find({});
    res.render('cazadores', { cazadores: todos });
  } catch (error) {
    res.status(500).send('Error al leer los cazadores.');
  }
});

app.post('/eliminar', async (req, res) => {
    try {
        const nombre = req.body.nombre; 
        const resultado = await Personaje.deleteOne({ nombre: nombre });

        if (resultado.deletedCount > 0) {
            res.send(`Personaje "${nombre}" eliminado correctamente.`);
        } else {
            res.send(`No se encontró el personaje "${nombre}".`);
        }
    } catch (error) {
        console.error('Error al eliminar el personaje:', error);
        res.status(500).send('Error al eliminar el personaje.');
    }
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
