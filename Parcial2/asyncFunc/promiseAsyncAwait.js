const fetch = require('node-fetch');
const url = 'https:api.chucknorris.io/jokes/random';

async function obtenerDatos(){
    try{
        console.log("\nPidiendo un dato (con async/await)...");
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log("Dato recibido:", datos.value);
    }catch (error){
        console.error("Ocurrio un error:", error);
    }
}
obtenerDatos();