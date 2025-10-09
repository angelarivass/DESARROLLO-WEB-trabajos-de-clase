const catalogo = [
    { id: 1, nombre: 'Laptop Gamer', stock: 5 },
    { id: 2, nombre: 'Playera Casual', stock: 10 },
    { id: 3, nombre: 'Mouse Inalámbrico', stock: 15 }
];

console.log(catalogo[1].nombre); 

catalogo.push({ id: 4, nombre: 'Teclado', stock: 10 });
console.log(catalogo.length);

let primerProducto = catalogo[0];
primerProducto.stock = 3;
primerProducto.enOferta = true;
console.log(primerProducto);