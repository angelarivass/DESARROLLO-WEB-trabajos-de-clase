const fetch = require('node-fetch');
const url = 'https://api.chucknorris.io/jokes/random';

console.log("Pidiendo un dato (con .theb)...");
fetch(url)
    .then(respuesta => {
        return respuesta.json();
    })
    .then(datos => {
        console.log("Dato recibido:", datos.value);
    })
    .catch(error => {
        console.error("Ocurrio un error:", error);
    });

    