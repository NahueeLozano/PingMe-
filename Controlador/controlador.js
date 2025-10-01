const Modelo = require('../modelo.js');
const Usuario = require('../clases/Usuario.js');
const Post = require('../clases/Post.js');


 //---post---

function agregarPost(data) {
    try {
        console.log("--Controlador--");

            // Crear el usuario
        const usuario = new Usuario(data.usuario.nombre, data.usuario.apellido);

        // Crear el post con los parámetros correctos
        const nuevoPost = new Post(usuario, data.contenido);

        console.log("Nuevo Post creado:", nuevoPost );

     // Guardar en modelo
     return Modelo.nuevoPost(nuevoPost);

    } catch (error) {
        console.error("Error al crear un nuevo post:", error.message);
        return { success: false };
    }
}
function obtenerPosts() {
    return Modelo.getPost();
}

    //-------------------------------------------

module.exports = { agregarPost, obtenerPosts };


