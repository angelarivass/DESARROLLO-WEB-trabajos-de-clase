<!DOCTYPE html>
<html lang="es">
    <head>
        <link rel="stylesheet" href = "style.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <title>Mi Primera Pagina PHP</title>
    </head>
    <body>
        <h1>¡Hola, soy tu primera página PHP!</h1>

        <p>Esta es la hora actual en el servidor: </p>
        <p>
            <?php
                echo "Hola mundo ";
                echo "El nombre del sistema operativo es: " . php_uname('s');
                echo "<br>";
                $lista = array("Perro", "Gato", "Pajaro", "Pez", "Conejo", "Hamster", "Tortuga");
                print_r($lista);
            ?>
        </p>
    </body>
</html>
