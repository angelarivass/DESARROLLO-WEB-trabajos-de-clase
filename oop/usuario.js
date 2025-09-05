
class Usuario{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
        this.fechaRegistro = new Date();
        this.estaActivo = true;
    }

    presentarse(){
        console.log(`Hola, soy ${this.nombre} y mi email es ${this.email}.`);
    }
    cambiarEstado(){
        this.estaActivo = !this.estaActivo;
        console.log(`El estado de ${this.nombre} ahora es: ${this.estaActivo}.`);
    }
}

const usuario1 = new Usuario('Angela', 'arivas@cetys.com');
const usuario2 = new Usuario('Linette', 'linette@cetys.com');

usuario1.presentarse();
usuario2.presentarse();

usuario1.cambiarEstado();

console.log(usuario1)