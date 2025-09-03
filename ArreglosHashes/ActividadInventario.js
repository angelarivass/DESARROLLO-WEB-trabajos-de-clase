const inventario = [
    { id: 'p001', nombre: 'Teclado Mecánico', stock: 10 },
    { id: 'p002', nombre: 'Mouse Gamer', stock: 5 },
    { id: 'p003', nombre: 'Monitor 24"', stock: 0 },
    { id: 'p004', nombre: 'Audífonos Pro', stock: 8 }
];

function buscarProductoPorId(id) {
    let encontrar = inventario.find(producto => producto.id === id); //declaro una variable encontrar que busca en el inventario un producto cuyo id sea igual al id que se pasa como argumento
    if (encontrar == undefined) { // si no se encuentra el producto (encontrar = undefined), lanzar error con throw new Error
        throw new Error(`¡Error! Producto con ID '${id}' no encontrado.`);
    }
    return encontrar; //esta funcion devuelve el producto encontrado
}

function procesarVenta(id, cantidad) {
    try {
        const producto = buscarProductoPorId(id); // intentar buscar el producto por id, usando la funcion buscarProductoPorId
        if (producto.stock >= cantidad) { // si el stock del producto es mayor o igual a la cantidad que se quiere vender, seguir con el proceso
            producto.stock -= cantidad; // restar la cantidad vendida del stock del producto
            console.log(`Venta exitosa: ${cantidad} unidad(es) de ${producto.nombre}. Stock restante: ${producto.stock}`); // mensaje de venta exitosa
        } else {
            throw new Error(`¡Error! Stock insuficiente para '${producto.nombre}'. Solo quedan ${producto.stock} unidades.`) // si no hay stock suficiente, lanzar error con throw new Error
        }
    } catch (error) { // atrapar cualquier error que ocurra en el try
        console.error(`No se pudo procesar la venta. Motivo: ${error.message}`); // mostrar mensaje de error 
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