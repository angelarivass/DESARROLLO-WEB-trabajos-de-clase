# Errores encontrados en el código:

1. Se declaró a la variable puntuacionTotal como una constante, y en una función se le intenta asignar otro valor. *Solución:* Declarar la variable con let para poder manipular su valor.

2. En la función aplicarBono() se crea una variable local bonoActivo y se declara como falsa, por lo que no se accede la función global con el mismo nombre, la cual es verdadera y es la que se debería utilizar. *Solución:* Eliminar la variable local.

3. En la línea 22, se intenta asignar el valor resultante de una función, pero esa función solo hace un console.log, no retorna a un valor en sí. *Solución:* reemplazar el console.log por return puntuacionTotal.

4. En la línea 24, se intenta acceder al valor de la variable puntosConBonus, pero al ser una variable local, no se logra acceder a ella. *Solución:* agregar valores de retorno a la función, en caso de que bonoActivo sea verdadero, calcular puntosConBonus y retornar su valor. En caso que sea falso, retornar puntuacionTotal. Ahora, al asignarle valor a puntuacionFinal, que se aplique la funcion aplicarBono().

