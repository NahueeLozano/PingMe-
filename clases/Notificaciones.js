class Notificaciones{
    constructor(mensaje ){
        this.id= Date.now();
        this.mensaje = mensaje;
        this.fecha = new Date();
        this.leida = false;

    }

    marcarComoLeida(){
        this.leida = true;
    }
    




}

module.exports = Notificaciones;