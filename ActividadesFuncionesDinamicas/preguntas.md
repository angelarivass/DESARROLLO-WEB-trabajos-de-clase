Sobre los Callbacks: ¿Cuál es la única responsabilidad de una función callback como esBarato? ¿Qué tipo de dato debe devolver siempre para que el filtro funcione y por qué?

    Su responsabilidad es evaluar un producto, y dependiendo de si cumple con el requisito ( como el de ser barato) responderá true, o false si no lo cumple. Siempre devolverá un bool porque la función principal lo requiere para decidir si un producto entra o no en el arreglo ya filtrado.

Sobre la Reutilización: ¿Por qué es más eficiente y limpio crear pequeñas funciones callback separadas en lugar de escribir toda la lógica con if/else dentro de la función principal filtrarProductos?

    Evitas la repetición de código, es más eficiente y limpio. Logras tener una función genérica para reutilizar, de esta manera no necesitas editar la lógica del filtrado, sólo se cambia el criterio de búsqueda.

Sobre la Abstracción: En tus propias palabras, ¿cuál es el trabajo de la función de orden superior filtrarProductos? ¿Su rol es saber qué productos buscar o cómo realizar el proceso de búsqueda?

    El trabajo de filtrarProductos es aplicar el criterio definido en el callback al recorrer cada uno de los productos. Su rol no es saber qué productos buscar, (eso lo hace el callback), más bien se encarga de cómo hacer el filtrado.

Sobre el Reto Extra: En el reto de la "fábrica", ¿qué tipo de dato devuelve la función crearFiltroPorCategoria? ¿Por qué es tan potente poder crear funciones "sobre la marcha"?

    Devolverá otra función (un callback), es potente porque es posible ir creando funciones acorde a las necesidades sin tener que estar escribiendo la lógica del filtardo una y otra vez.

Conectando con JavaScript: Los métodos nativos de arreglos como .map(), .filter() y .forEach() son funciones de orden superior. ¿Cómo se relaciona la función filtrarProductos que creaste con el método .filter() nativo de JavaScript?

    Son muy similares, ambos pueden recorrer un arreglo, reciben un callback y devuelven un nuevo arreglo con los elementos que pasaron el filtro, por lo que realizan el mismo trabajo.
