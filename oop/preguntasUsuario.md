Preguntas de Reflexión
Si creas dos usuarios, usuario1 y usuario2, y llamas a usuario1.cambiarEstado(), ¿afecta esto a la propiedad estaActivo de usuario2? ¿Por qué? ¿Qué nos dice esto sobre la encapsulación de los datos de cada objeto?

    No, no se cambia el estado del usuario2 porque no se le aplicó la función a esa instancia, sólo se usó en usuario1. Cada objeto tiene sus propios atributos, ya sean públicos o privados y se puede acceder a ellos de manera individual.


¿Por qué fue una buena idea inicializar estaActivo y fechaRegistro dentro del constructor en lugar de pedirlos como parámetros?

    Porque con los atributos que están en los parámetros, esperas que se les de el valor al crearse un objeto de la clase, y los atributos estaActivo y fechaRegistro se inicializan automáticamente al crear una nueva instancia. Sus valores son determinados al crearse.


Piensa en el sistema de blog completo. ¿Qué otras propiedades (ej. postsPublicados) y métodos (ej. publicarNuevoPost()) crees que podría tener tu clase Usuario en el futuro?

    La clase usuario podría llegar a tener las propiedades de descripción, postsDestacados, videosCompartidos, listaSeguidores, los métodos de editarDescripcion(), agregarFotoPerfil(), editarNombreUsuario(), verListaSeguidores() entre otros.