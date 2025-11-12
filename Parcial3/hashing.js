const crypto = require('crypto');

function sha256(data){
    return crypto.createHash('sha256').update(data).digest('hex');
}

console.log("--- Demo de SHA-256 (Grado Industrial-rapido) ----");
console.log("Hash de 'Hola':", sha256('Hola'));
console.log("Hash de 'Hola':", sha256('Hola'));
console.log("Hash de 'Hola':", sha256('Hola'));

console.log("Hash de 'Mensaje...largo...':", sha256('Mensaje muy, muy, muy largo'));

