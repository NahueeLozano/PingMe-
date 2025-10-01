class  Usuario{
   constructor({ nombre, apellido, email, contraseña, edad, genero } = {}) {
        this.nombre = nombre || "Anónimo";
        this.apellido = apellido || "";
        this.email = email || "";
        this.contraseña = contraseña || "";
        this.edad = edad || null;
        this.genero = genero || "";
        this.posts = [];
        this.notificaciones = [];
    }


//setters and getters
    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    getApellido(){
        return this.apellido;
    }
    setApellido(apellido){
        this.apellido = apellido;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
    getContraseña(){
        return this.contraseña;
    }
    setContraseña(contraseña){
        this.contraseña = contraseña;
    }
    getEdad(){
        return this.edad;
    }
    setEdad(edad){
        this.edad = edad;
    }
    getGenero(){
        return this.genero;
    }
    setGenero(genero){      
        this.genero = genero;
    }

json(){
    return {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        contraseña: this.contraseña,
        edad: this.edad,
        genero: this.genero
    };

}
}
module.exports = Usuario;