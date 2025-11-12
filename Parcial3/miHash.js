
function miHash(password, salt){

    let sumaChar = 0
    for (let i = 0; i < password.length; i++) {
        sumaChar += password.charCodeAt(i);
  }
  hashCalculador = sumaChar - salt.length;
  hashCalculador = hashCalculador.toString();

  passInvertida = password.split('').reverse().join('');
  saltInvertida = salt.split('').reverse().join('');
  mitad = Math.floor(password.length /2);
  passwordMitad1 = passInvertida.slice(0, mitad);
  passwordMitad2 = passInvertida.slice(mitad)
  hashInversor = passwordMitad1 + saltInvertida + passwordMitad2;

  hashFinal = hashCalculador + hashInversor
  return `${salt}:${hashFinal}`;
  
}

function verificarHash(password, hashGuardado) {
  const [salt, hash] = hashGuardado.split(":");
  const nuevoHash = miHash(password, salt);
  return nuevoHash === hashGuardado;
}
//demo
const sal = 'k45t6';
const contrasena = 'hola234'
const hashGuardado = miHash(contrasena, sal);
console.log("Password hasheada:", hashGuardado);
console.log("Verificacion exitosa:", verificarHash('hola234', hashGuardado));
console.log("Verificacion incorrecta:", verificarHash('hola342', hashGuardado));






