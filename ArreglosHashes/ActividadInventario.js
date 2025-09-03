const inventario = [
    { id: 'p001', nombre: 'Teclado Mecánico', stock: 10 },
    { id: 'p002', nombre: 'Mouse Gamer', stock: 5 },
    { id: 'p003', nombre: 'Monitor 24"', stock: 0 },
    { id: 'p004', nombre: 'Audífonos Pro', stock: 8 }
];

function buscarProductoPorId(id) {
    let encontrar = inventario.find(producto => producto.id === id);
    if (encontrar == undefined) {
        throw new Error(`¡Error! Producto con ID '${id}' no encontrado.`);
    }
    return encontrar;
}

function procesarVenta(id, cantidad) {
    try {
        const producto = buscarProductoPorId(id);
        if (producto.stock >= cantidad) {
            producto.stock -= cantidad;
            console.log(`Venta exitosa: ${cantidad} unidad(es) de ${producto.nombre}. Stock restante: ${producto.stock}`);
        } else {
            throw new Error(`¡Error! Stock insuficiente para '${producto.nombre}'. Solo quedan ${producto.stock} unidades.`)
        }
    } catch (error) {
        console.error(`No se pudo procesar la venta. Motivo: ${error.message}`);
    }
}

console.log("--- Intentando procesar ventas ---");
 
 
// Caso 1: Venta exitosa
procesarVenta('p002', 3);
 
 
// Caso 2: Producto no encontrado
procesarVenta('p999', 1);
 
 
// Caso 3: Stock insuficiente
procesarVenta('p001', 15);
 
 
// Caso 4: Producto sin stock (stock es 0)
procesarVenta('p003', 1);
 
 
console.log("\n--- Estado final del inventario ---");
console.log(inventario);