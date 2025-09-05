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
    
}