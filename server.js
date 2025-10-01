const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const Controlador = require('./Controlador/controlador.js');
const Usuario = require('./clases/Usuario.js');
const Post = require('./clases/Post.js');

// Configurar carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, 'css')));

// Configuración EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




//----------login-------------
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Acá iría la lógica de autenticación
  if (email === 'nahuel@pingme.com' && password === '1234') {
    res.redirect('/home');
  } else {
    res.send('Credenciales incorrectas');
  }
});







// Rutas principales de la app
//inicio 
app.get('/', (req, res) => {
    const posts = Controlador.obtenerPosts();
    const usuario = { nombre: "Nahuel", apellido: "Lozano" }; // o dinámico si lo tenés
    res.render('home', { posts, usuario });
});

app.get('/home', (req, res) => {
     const posts = Controlador.obtenerPosts();
    const usuario = { nombre: "Nahuel", apellido: "Lozano" }; // o dinámico si lo tenés
    res.render('home', { posts, usuario });
});
    // Ruta para agregar un nuevo post

app.post('/agregarPost', (req, res) => {
    const contenido = req.body.contenido;
    if (contenido && contenido.trim() !== "") {
        Controlador.agregarPost({
            contenido,
            usuario: { nombre: "Nahuel", apellido: "Lozano" }
        });
    }
    res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));
