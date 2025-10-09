function convertirAJson(datos){
//Json.stringify convierte un objeto o valor de JavaScript en una cadena JSON, no siempre funciona
    const jsonString = JSON.stringify(datos);
    console.log("Conversion exitosa.");
    return jsonString;
}

convertirAJson({nombre:"Ana", edad: 30 });

let obj1 = {};
let obj2 = {};
obj1.a = obj2;
obj2.b = obj1;
//convertirAJson(obj1); 

try{
    console.log("Intentando convertir datos complejos...");
    convertirAJson(obj1);
}catch(error){
    console.error("Ocurrio un error! Pero el programa continua");
    console.error("Detalle del error: " + error.message);
}
console.log("El programa sigue funcionando despues del error.");