class producto {
    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInfo(){
        console.log(`--- INFO: ${this.nombre} (ID: ${this.id})---`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock disponible: ${this.stock} unidades`);
    }
}

//instancias
const laptop = new Prosucto('p001', 'Laptop Gamer', 2500, 5);
const mouse = new Producto('p002', 'Mouse Gamer', 450, 15);

console.log(laptop);
console.log(mouse.nombre)

const laptopActualizado = new Producto('p001', 'Laptop Gamer', 2500, 5);

laptopActualizado.mostrarInfo();