**Sobre el Caso Base:** En esta función, no hay un if explícito para detenerse. ¿Cuál es entonces el "caso base" que hace que la recursión se detenga naturalmente en una rama del menú (por ejemplo, al llegar a "Celulares")?

	Cuando una categoría no tiene subcategorías, el array de subcategorias está vacío por lo que no continúa con el ciclo for y la función termina. El caso base se da cuando el array subcategorias está vacío. 


**Sobre los Parámetros:** ¿Qué papel juega el parámetro nivel en la función? ¿Por qué es crucial pasarlo e incrementarlo en cada llamada recursiva?

	Porque cuando se vuelve a ejecutar la función por la existencia de otra rama, se debe distinguir que los siguientes elementos son de subcategorías propias de los elementos previos. Y cada vez que se vuelve a llamar a la función significa que se deberá incrementar el número de guiones, esto se logra pasando ahora *nivel* + 1 a los parámetros de la función. De esta manera se distingue la jerarquía.


**Sobre el Call Stack:** Describe o dibuja qué sucede en la Pila de Llamadas (Call Stack) cuando tu programa está a punto de imprimir la categoría "Gaming". ¿Qué funciones y con qué nivel están esperando en la pila?

	La pila contendría lo siguiente:
1. imprimirMenu(menu,0)
2. imprimirMenu(Electrónica, 1)
3. imprimierMenu(Laptops, 2)
4. imprimirMenu(Gaming, 3)


**Sobre la Alternativa:** ¿Sería fácil resolver este problema usando únicamente bucles for o while? ¿Por qué la recursión es una solución tan natural y elegante para procesar estructuras de datos jerárquicas o anidadas como esta?

	Si utilizáramos bucles como solución, sería un proceso más complejo ya que se requeriría de una estructura de datos. La recursión es mejor opción al tratarse de un procesamiento de jerarquías, esto porque la idea de las funciones recursivas se asimila a la de las jerarquías, es bajar y subir entre niveles.
