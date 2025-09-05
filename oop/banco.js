class CuentaBancaria{
    constructor(numeroCuenta, titular, saldoInicial){
        this.numeroCuenta = numeroCuenta;
        this.titular = titular;
        this.saldoInicial = saldoInicial;
    }
    depositar(monto){
        this.saldoInicial +=monto;
    }
    retirar(monto){
        if(this.saldoInicial>=monto){
            this.saldoInicial-=monto;
        }else{
            throw new Error("El saldo actual es insuficiente para realizar el retiro.");
        }
    }
}

class Banco{
    constructor(cuentas=[]){
        this.cuentas = cuentas;
    }
    agregarCuenta(cuenta){
        this.cuentas.push(cuenta);
    }
    buscarCuenta(numeroCuenta){
        const cuentaEncontrada = this.cuentas.find(cuenta => cuenta.numeroCuenta === numeroCuenta);
        if(!cuentaEncontrada){
            throw new Error("Cuenta ingresada inexistente.");
        }
        return cuentaEncontrada;
    }

    realizarTransaccion(numeroCuenta, tipo, monto){
        try{
            const cuenta = this.buscarCuenta(numeroCuenta);

            if(tipo ==="deposito"){
                cuenta.depositar(monto);
            }else if(tipo === "retiro"){
                cuenta.retirar(monto);
            }else{
                throw new Error("Tipo de transaccion invalido. Use las palabras 'deposito' o 'retiro'.");
            }
            console.log("El proceso fue exitoso.");

        }catch(error){
            console.error(`No se ha podido completar el proceso. Motivo: ${error.message}`);
        }
    }
    
}


// --- Simulación ---
console.log("Iniciando simulación bancaria...");
 
// Crear instancias
const miBanco = new Banco();
const cuentaAna = new CuentaBancaria(101, "Ana Gómez", 5000);
const cuentaCarlos = new CuentaBancaria(102, "Carlos Ruiz", 2500);
 
// Agregar cuentas al banco
miBanco.agregarCuenta(cuentaAna);
miBanco.agregarCuenta(cuentaCarlos);
 
// Realizar transacciones de prueba
console.log("\n--- Transacciones ---");
 
// 1. Depósito exitoso
miBanco.realizarTransaccion(101, 'deposito', 1500);
 
// 2. Retiro exitoso
miBanco.realizarTransaccion(102, 'retiro', 1000);
 
// 3. Retiro con fondos insuficientes (debe mostrar error)
miBanco.realizarTransaccion(101, 'retiro', 10000);
 
// 4. Transacción en una cuenta que no existe (debe mostrar error)
miBanco.realizarTransaccion(999, 'deposito', 500);
 
// 5. Ver saldos finales
console.log("\n--- Saldos Finales ---");
console.log(miBanco.cuentas);
