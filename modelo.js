const fs = require('fs');
const path = require('path');
const Usuario = require('./clases/Usuario.js');
const Post = require('./clases/Post.js');

const dbPath = path.join(__dirname, 'db', 'post.txt'); // Ruta al archivo

//--- Post -------------------



// Guardar un nuevo post
function nuevoPost(post) {
    console.log("--Modelo--");
    if (!(post instanceof Post)) {
        return { success: false, message: "No es un objeto Post válido" };
    }

    let posts = [];
    try {
        // Leer posts existentes si existen
        if (fs.existsSync(dbPath)) {
            const strPosts = fs.readFileSync(dbPath, 'utf-8');
            if (strPosts) posts = JSON.parse(strPosts);
        } else {
            console.log("Archivo no encontrado, se creará uno nuevo.");
        }
    } catch (err) {
        console.log("Error leyendo el archivo de posts:", err.message);
    }

    // Agregar nuevo post
    posts.push(post);

    // Guardar de nuevo en el archivo
    try {
        fs.writeFileSync(dbPath, JSON.stringify(posts, null, 2), 'utf-8');
    } catch (err) {
        console.log("Error guardando el archivo de posts:", err.message);
        return { success: false };
    }

    return { success: true };
}





function getPost() {
    let posts = [];
    try {
        if (fs.existsSync(dbPath)) {
            const strPosts = fs.readFileSync(dbPath, 'utf-8');
            if (strPosts) {
                const postGuardados = JSON.parse(strPosts);

                posts = postGuardados.map(t => {
                    const usuario = new Usuario(
                        t.usuario?.nombre || "Anónimo",
                        t.usuario?.apellido || ""
                    );

                    return {
                        nombre: usuario.getNombre(),
                        apellido: usuario.getApellido(),
                        contenido: t.contenido,
                        fecha: new Date(t.fecha).toLocaleString(),
                        likes: t.likes || [],
                        comentarios: t.comentarios || []
                    };
                });
            }
        }
    } catch (err) {
        console.log("Error leyendo posts:", err.message);
    }

    return posts;
}


module.exports = { nuevoPost, getPost };
