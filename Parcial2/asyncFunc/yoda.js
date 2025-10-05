const fs = require('fs');
const fetch = require('node-fetch');
const url = 'https://api.funtranslations.com/translate/yoda.json';


async function traducirYGuardar(texto) {
    try {
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ text: texto })
        });
        const datos = await respuesta.json();
        textoTraducido = datos.contents.translated;
        await fs.promises.writeFile('traduccion_yoda.txt', textoTraducido);
        console.log("Se logro traducir lo siguiente: ", textoTraducido);
        
    } catch (error) {
        console.error("Ocurrio un error:", error);
    }
}

traducirYGuardar("You will learn asynchronous programming today.");
