function factorialConBucle(n){
    if(n < 0){
        return "No definido.";
    }
    if(n===0){
        return 1;
    }

    let resultado = 1;
    for (let i = n; i>0; i--){
        resultado = resultado * i;
    }
    return resultado;
}

function factorialRecursivo(n){
    if(n < 0){  
        return "No definido.";
    }
    if(n===0){
        return 1;
    }
    return n * factorialRecursivo(n-1);
}
console.log(`Factorial recursivo: ${factorialRecursivo(5)}`);
