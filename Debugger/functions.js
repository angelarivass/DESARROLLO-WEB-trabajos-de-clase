const variableGlobal = "Soy accesible desde cualquier lugar";

function funcionPrincipal(parametro){
    let variablePrincipal = "Solo vivo en funcionPrincipal";
    console.log("Inciando la funcion principal...");

    let resultado = funcionSecundaria(parametro * 2);

    return `El resultado final es ${resultado}`;
}

function funcionSecundaria(arg){
    const variableSecundaria = "Solo vivo en funcionSecundaria";
    console.log(variableGlobal); //se accede a la variable global

    let calculo = arg + 10;
    return calculo;
}

const valorFinal = funcionPrincipal(5);
console.log(valorFinal);