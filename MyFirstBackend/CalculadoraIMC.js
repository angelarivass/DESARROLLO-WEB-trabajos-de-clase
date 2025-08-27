//Calculadora automatica de IMC -Indice de masa corporal
//Para poder correrlo utilizando Node.js, se necesita instalar el paquete prompt-sync
const prompt = require('prompt-sync')();

console.log('Bienvenido a la calculadora de IMC. Ingrese los siguientes datos:');

//Asignar el valor del input que ingreso el usuario a las variables peso y altura
let peso = prompt('Ingrese su peso en kg:');
let altura = prompt('Ingrese su altura en metros:');

//Hacer la conversion de string a float
peso = parseFloat(peso);
altura = parseFloat(altura);

//Validar con la funcion isNaN() que los valores ingresados por el usuario sean numeros y mayores de 0
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log('Favor de ingresar valores numericos válidos.');      
    process.exit(1);
}

//Calcular el IMC
const imc = peso / (altura * altura);

//Determinar el estado de salud en base al IMC calculado
//Esto se hace comparando el IMC con los rangos establecidos, con una serie de condiciones if y else
if (imc < 18.5) {
    //Utilizamos la funcion toFixed() para redondear el resultado a dos decimales
    //Imprimimos en pantalla el resultado
    console.log(`Su IMC es de ${imc.toFixed(2)}, su estado de nutrición es de bajo peso.`);
} else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Su IMC es de ${imc.toFixed(2)}, su estado de nutrición es de peso normal.`);
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Su IMC es de ${imc.toFixed(2)}, su estado de nutrición es sobrepeso.`);
} else {
    console.log(`Su IMC es de ${imc.toFixed(2)}, su estado de nutrición es obesidad.`);
}