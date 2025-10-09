const aMayusculas = function(texto){
    console.log(texto.toUpperCase());
};

const aMinusculas = function(texto){
    console.log(texto.toLowerCase());
};

function procesarMensaje(mensaje, accion){
    console.log(`Procesando el mensaje:" ${mensaje}"`);
    accion(mensaje);
}

procesarMensaje("Este es un Mensaje Secreto", aMayusculas);
procesarMensaje("OTRO MENSAJE SECRETO", aMinusculas);