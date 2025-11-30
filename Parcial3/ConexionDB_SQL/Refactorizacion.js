const express = require('express');
const fs = require('fs');
const { Pool } = require('pg');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
  const log = `[${new Date().toString()}] ${req.method} ${req.url}\n`;
  fs.appendFile('server.log', log, (error) => {
    if (error) console.log("Error al escribir en el log.");
  });
  next();
});

const pool = new Pool({
  host: 'localhost',
  user: 'angela',
  password: 'soporte',
  database: 'cazadoresdb',
  port: 5432
});

//read
app.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM cazadores');
    res.render('cazadores', { cazadores: rows });
  } catch (error) {
    console.error('Error al leer los cazadores:', error);
    res.status(500).send('Error al leer los cazadores.');
  }
});

//create
app.post('/registrar', async (req, res) => {
  try {
    const { nombre, respiracion } = req.body;

    await pool.query(
      'INSERT INTO cazadores (nombre, respiracion, rango) VALUES ($1, $2, $3)',
      [nombre, respiracion, 'Mizunoto']
    );

    res.redirect('/');
  } catch (error) {
    console.error('Error al registrar el cazador:', error);
    res.status(500).send('Error al registrar el cazador.');
  }
});

//update
app.post('/actualizar', async (req, res) => {
  try {
    const { nombre, respiracion } = req.body;

    const resultado = await pool.query(
      'UPDATE cazadores SET respiracion = $1 WHERE nombre = $2',
      [respiracion, nombre]
    );

    if (resultado.rowCount > 0) {
      res.send(`Cazador "${nombre}" actualizado correctamente.`);
    } else {
      res.send(`No se encontró el cazador "${nombre}".`);
    }
  } catch (error) {
    console.error('Error al actualizar el cazador:', error);
    res.status(500).send('Error al actualizar el cazador.');
  }
});

//delete
app.post('/eliminar', async (req, res) => {
  try {
    const { nombre } = req.body;

    const resultado = await pool.query(
      'DELETE FROM cazadores WHERE nombre = $1',
      [nombre]
    );

    if (resultado.rowCount > 0) {
      res.send(`Cazador "${nombre}" eliminado correctamente.`);
    } else {
      res.send(`No se encontró el cazador "${nombre}".`);
    }
  } catch (error) {
    console.error('Error al eliminar el cazador:', error);
    res.status(500).send('Error al eliminar el cazador.');
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
