class Personaje {
    constructor(nombre, vida){
        this.nombre = nombre;
        this.vida = vida;
    }

    recibirDano(cantidad){
        this.vida -= cantidad;
        console.log(`${this.nombre} ahora tiene ${this.vida} puntos de vida.`);
    }

    atacar(objetivo){
        console.log(`${this.nombre} realiza un ataque bascio contra ${objetivo.nombre}.`);
    }
}

class Guerrero extends Personaje{
    constructor(nombre, vida, arma){
        super(nombre, vida);
        this.arma = arma;
    }

    atacar(objetivo){
        console.log(`${this.nombre} ataca a ${objetivo.nombre} son su ${this.arma}.`);
        objetivo.recibirDano(20);
    }
}

class Mago extends Personaje{
    constructor(nombre, vida, hechizo){
        super(nombre, vida);
        this.hechizo = hechizo;
    }

    atacar(objetivo){
        console.log(`${this.nombre} lanza '${this.hechizo}' a ${objetivo.nombre}.`);
        objetivo.recibirDano(30);
    }
}

class Arquero extends Personaje{
    constructor(nombre, vida, numeroFlechas){
        super(nombre, vida);
        this.numeroFlechas = numeroFlechas;
    }

    atacar(objetivo){
        if (this.numeroFlechas > 0){
            console.log(`${this.nombre} ha disparado una flecha a ${objetivo.nombre}.`);
            this.numeroFlechas--;
            objetivo.recibirDano(25);
        }else{
            console.log(`${this.nombre} no tiene flechas para atacar.`);
        }
    }
}


//clase villano

class Villano extends Personaje{
    constructor(nombre, vida, habilidad, numero){
        super(nombre, vida);
        this.habilidad = habilidad;
        this.numero = numero;
    }

    atacar(objetivo){
        if (this.numero > 0){
            console.log(`${this.nombre} usa su habilidad de ${this.habilidad} contra ${objetivo.nombre}.`);
            this.numero--;
            objetivo.recibirDano(15);
        }else{
            console.log(`${this.nombre} no tiene recursos para atacar.`);
        }
    }

    monologo(){
        console.log('Mayo tiene 31 días, pero sólo yo tengo la capacidad de dejarte, humillarte y conseguirte un reemplazo en ese mismo mes.')
    }

}



const legolas = new Arquero('Legolas', 130, 2);
const aragorn = new Guerrero('Aragorn', 150, 'espada');
const gandalf = new Mago('Gandalf', 100, 'Bola de Fuego');

function simularCombate(personaje1, personaje2){
    console.log('--- Comienza el combate ---');
    personaje1.atacar(personaje2);
    personaje2.atacar(personaje1);

}

//simularCombate(aragorn, gandalf);
//simularCombate(legolas, gandalf);
/*simularCombate(legolas, aragorn);
simularCombate(legolas, aragorn);
simularCombate(legolas, aragorn);
*/

const nodal = new Villano('Nodal', 120, 'abandonar hijos', 1);
const nodal2 = new Villano('Nodal', 120, 'regatear pension', 20);
const cazzu = new Guerrero('Cazzu', 110, 'demanda');
nodal.monologo();
simularCombate(nodal, cazzu);

//simularCombate(nodal2, cazzu);