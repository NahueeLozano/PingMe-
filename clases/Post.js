class Post{
       constructor(usuario, contenido) {
        this.id = Date.now(); // ID único
        this.usuario = usuario; // instancia de Usuario
        this.contenido = contenido;
        this.fecha = new Date(); // se genera automáticamente
        this.likes = [];
        this.comentarios = [];
    }

    agregarLike(usuario){
        this.likes.push(usuario);
        this.Usuario.recibirNotificacion(`Tu post ha recibido un like de ${usuario.getNombre()} ${usuario.getApellido()}`);
    }

    agregarComentario(usuario, texto){
        const comentario = {
            id: Date.now(),
            usuario: usuario,
            texto: texto,
            fecha: new Date()
        };
        this.comentarios.push(comentario);
        this.Usuario.recibirNotificacion(`Tu post ha recibido un comentario de ${usuario.getNombre()} ${usuario.getApellido()}`);
    }



}

module.exports = Post;