const express = require('express');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(cookieParser());
app.use(express.json());
app.use(express.static(__dirname)); 


const logsDir = path.join(__dirname, 'logs');
const backupsDir = path.join(__dirname, 'backups');
if (!fs.existsSync(logsDir)) fs.mkdirSync(logsDir);
if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir);


class ServidorVirtual {
    constructor(id, nombre, adminID) {
        this.id = id;
        this.nombre = nombre;
        this.estado = 'apagado';
        this.adminID = adminID;
        this.logPath = path.join(logsDir, `${this.id}.log`);

        if (!fs.existsSync(this.logPath)) {
            fs.writeFileSync(this.logPath, '');
        }
    }

    encender() {
        this.estado = 'encendido';
        this.guardarLog("Servidor encendido");
    }

    apagar() {
        this.estado = 'apagado';
        this.guardarLog("Servidor apagado");
    }

    guardarLog(mensaje) {
        const fecha = new Date().toLocaleString();
        fs.appendFileSync(this.logPath, `[${fecha}] ${mensaje}\n`);
    }

    respaldar() {
        const backupPath = path.join(backupsDir, `${this.id}.log`);
        exec(`cp "${this.logPath}" "${backupPath}"`, (error) => {
            if (error) {
                console.error("Error creando backup:", error);
            } else {
                console.log("Backup creado en", backupPath);
            }
        });
    }
}

const servidores = {}; 
app.use((req, res, next) => {
    let usuarioID = req.cookies.usuarioID;
    if (!usuarioID) {
        usuarioID = crypto.randomUUID();
        res.cookie('usuarioID', usuarioID, { httpOnly: true });
    }
    req.usuarioID = usuarioID;

    if (!servidores[usuarioID]) {
        servidores[usuarioID] = [];
    }
    next();
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/servidores', (req, res) => {
    const nombre = req.body.nombre;
    if (!nombre) return res.status(400).json({ error: "Nombre requerido" });

    const nuevoServidor = new ServidorVirtual(crypto.randomUUID(), nombre, req.usuarioID);
    servidores[req.usuarioID].push(nuevoServidor);

    res.json({ mensaje: "Servidor creado", servidor: nuevoServidor });
});
app.get('/servidores', (req, res) => {
    res.json(servidores[req.usuarioID]);
});

app.post('/servidores/:id/encender', (req, res) => {
    const servidor = servidores[req.usuarioID].find(s => s.id === req.params.id);
    if (!servidor) return res.status(404).json({ error: "Servidor no encontrado" });

    servidor.encender();
    res.json({ mensaje: "Servidor encendido", servidor });
});

app.post('/servidores/:id/apagar', (req, res) => {
    const servidor = servidores[req.usuarioID].find(s => s.id === req.params.id);
    if (!servidor) return res.status(404).json({ error: "Servidor no encontrado" });

    servidor.apagar();
    res.json({ mensaje: "Servidor apagado", servidor });
});

app.post('/servidores/:id/backup', (req, res) => {
    const servidor = servidores[req.usuarioID].find(s => s.id === req.params.id);
    if (!servidor) return res.status(404).json({ error: "Servidor no encontrado" });

    servidor.respaldar();
    res.json({ mensaje: "Respaldo creado" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
