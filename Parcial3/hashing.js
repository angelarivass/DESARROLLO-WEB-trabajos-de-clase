const crypto = require('crypto');

function sha256(data){
    return crypto.createHash('sha256').update(data).digest('hex');
}

console.log("--- Demo de SHA-256 (Grado Industrial-rapido) ----");
console.log("Hash de 'Hola':", sha256('Hola'));
console.log("Hash de 'Hola':", sha256('Hola'));
console.log("Hash de 'hola':", sha256('hola'));

console.log("Hash de 'Mensaje...largo...':", sha256('Mensaje muy, muy, muy largo'));


function academicHash(input){
    let hash = 0;
    if(input.length === 0) return "00000000";
    for (let i = 0; i < input.length; i++){
        const charCode = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + charCode;
        hash = hash | 0;
    }
    return Math.abs(hash).toString(16).padStart(8, '0');
}

console.log("\n --- Demo de custom hash ---");
console.log("Hash de 'Hola':", academicHash('Hola'));
console.log("Hash de 'Hola':", academicHash('Hola'));
console.log("Hash de 'hola':", academicHash('hola'));
console.log("Hash de 'Mensaje...largo...':", academicHash('Mensaje muy, muy, muy largo'));
