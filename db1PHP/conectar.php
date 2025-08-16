<?php
// --- PARÁMETROS DE CONEXIÓN A LA BASE DE DATOS ---
$servidor = "localhost";    // El servidor donde está la base de datos (usualmente localhost)
$usuario = "root";          // El usuario de la base de datos (por defecto en XAMPP es "root")
$password = "";             // La contraseña del usuario (por defecto en XAMPP está vacía)
$base_de_datos = "tienda_db"; // El nombre de la base de datos que creamos
 
 
// --- CONEXIÓN A LA BASE DE DATOS USANDO MySQLi (Estilo Orientado a Objetos) ---
$conexion = new mysqli($servidor, $usuario, $password, $base_de_datos);
 
 
// --- VERIFICACIÓN DE LA CONEXIÓN ---
// Si la conexión tiene un error, el script se detiene y muestra el error.
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
 
 
echo "¡Conexión exitosa a la base de datos!<br><hr>";
 
 
// --- CONSULTA SQL PARA OBTENER LOS DATOS ---
$sql = "SELECT id, nombre_producto, precio, fecha_creacion FROM productos";
$resultado = $conexion->query($sql);
 
 
// --- MOSTRAR LOS DATOS EN UNA TABLA HTML ---
if ($resultado->num_rows > 0) {
    // Si hay resultados, empezar a crear la tabla
    echo "<h2>Lista de Productos</h2>";
    echo "<table border='1'>";
    echo "<tr><th>ID</th><th>Nombre del Producto</th><th>Precio</th><th>Fecha de Creación</th></tr>";
 
 
    // Bucle para recorrer cada fila de resultados
    while($fila = $resultado->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $fila["id"] . "</td>";
        echo "<td>" . $fila["nombre_producto"] . "</td>";
        echo "<td>$" . $fila["precio"] . "</td>";
        echo "<td>" . $fila["fecha_creacion"] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    // Si no hay resultados, mostrar un mensaje
    echo "No se encontraron productos en la base de datos.";
}
 
 
// --- CERRAR LA CONEXIÓN ---
// Es una buena práctica cerrar la conexión cuando ya no se necesita.
$conexion->close();
?>