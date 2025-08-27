function calcularTotal(precioBase, impuesto) {
    let costoImpuesto = precioBase * impuesto;
    let precioFinal = sumar(precioBase, costoImpuesto);
    return precioFinal;
}
function sumar(a, b) {
    let resultadoSuma = a + b;
    return resultadoSuma;
}
const precioNeto = 200;
const iva = 0.16;
const totalAPagar = calcularTotal(precioNeto, iva);

console.log(`El total a pagar es: ${totalAPagar}`);