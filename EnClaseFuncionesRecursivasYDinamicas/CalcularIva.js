const calcularIva = function(monto){
    return monto * 0.16;
};

const mostarTotal = function(monto){
    const iva = calcularIva(monto);
    const total = monto + iva;
    console.log(`El monto es: ${monto}, el IVA es: ${iva} y el total es: ${total}`);
};

mostrarTotal(100);
