function cuentaRegresivaRecursiva(n){
    if(n==0){
        console.log("¡Despegue!");
        return;
    }
    console.log(n);
    cuentaRegresivaRecursiva(n-1);
}

cuentaRegresivaRecursiva(10);
