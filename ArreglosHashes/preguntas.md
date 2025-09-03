Sobre la Decisión de Usar throw: En la función buscarProductoPorId, ¿qué diferencia fundamental hay entre usar throw new Error(...) cuando no se encuentra un producto, y simplemente devolver null o undefined? ¿Qué le "comunica" un throw a la función que la llamó?

    Al usar throw new Error no se estaría devolviendo un valor en sí como lo sería si se devolviera null.
    Se comunica que ha ocurrido un error durante la ejecución.


Sobre el Flujo de Control: Describe el flujo de ejecución en la función procesarVenta cuando se le pasa un ID de producto que no existe. ¿Qué línea de código "lanza" el error y qué línea lo "atrapa"? ¿Por qué el programa puede continuar y no se detiene por completo?

    Al no encontrar el id relacionado a un producto, se ejecuta la línea:
        throw new Error(`¡Error! Producto con ID '${id}' no encontrado.`);
    La línea que lo atrapa es:
        catch (error) {
            console.error(`No se pudo procesar la venta. Motivo: ${error.message}`);
    }

    El programa continúa porque el error fue atrapado, por lo que sigue con las ejecuciones que faltan.
 

Sobre las Reglas de Negocio: Los dos errores que lanzamos ('Producto no encontrado' y 'Stock insuficiente') representan fallos en las "reglas de negocio" de nuestra tienda. ¿Por qué es importante "atrapar" estos errores en la función procesarVenta en lugar de dejar que detengan el programa?

    Porque son condiciones que hemos descrito en el programa en caso que ocurran situaciones que influyan en el flujo del procesamiento. Si estas condiciones no se cumplen significa que no se puede seguir con el procesamiento, pero no significa que queremos cerrar el programa. 


Sobre la Comunicación entre Funciones: ¿Cómo se comunican las funciones buscarProductoPorId y procesarVenta cuando ocurre un error? ¿Qué mecanismo une el throw de una con el catch de la otra?

    buscarProductoPorId lanza un error a partir de throw, procesarVenta recibe el error dentro de su catch. Al ejecutar el throw, ya no se ejecutan las demás líneas de código y en este caso, se busca el catch en la función procesarVenta.


Sobre la Robustez del Código: ¿Qué habría pasado con el estado del inventario si no hubiéramos verificado el stock antes de intentar restar la cantidad? ¿Cómo ayuda el try...catch a mantener la integridad de nuestros datos?
    Si no se hubiera asegurado que el stock era suficiente, al restar, el resultado sería un número negativo. El try catch nos permite evitar modificar erróneamente el inventario.