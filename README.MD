# PingMe 🐷

**PingMe** PingMe es una red social desarrollada con Node.js, Express y EJS, pensada para ofrecer una experiencia simple, visual y funcional.  PingMe permite a los usuarios publicar pensamientos, ver notificaciones, interactuar con otros y navegar en una interfaz limpia y amigable, con un diseño rosa distintivo

El proyecto está estructurado de forma modular, con controladores, clases y vistas separadas, y utiliza archivos .txt como base de datos inicial para almacenar publicaciones. La interfaz incluye un panel lateral fijo, un área principal de publicaciones, botones interactivos y soporte para íconos de Bootstrap.
---
### 🔧 Funcionalidades actuales
* Crear y visualizar publicaciones
* Panel de notificaciones y conectados
* Estilo responsive con Bootstrap y CSS personalizado
* Interfaz visual tipo red social con diseño rosa
* Estructura backend modular con rutas Express
---

## 🚀 Instalación

Para correr este proyecto localmente, seguí estos pasos:

### 1. Cloná el repositorio

```bash
git clone https://github.com/nahuellozano/pingme.git
cd pingme
code .

### Instalá las dependencias
npm init -y
npm install express
npm install ejs

###📁 Estructura del proyecto
pingMe/
├─ server.js
├─ modelo.js
├─ Controlador/
│   └─ controlador.js
├─ clases/
│   ├─ Usuario.js
│   └─ Post.js
│   └─ Notificaciones.js
├─ db/
│   └─ post.txt
├─ views/
│   └─ home.ejs
├─css/
│   └─ home.css


###🧠 Tecnologías usadas
Node.js – entorno de ejecución

Express – framework para servidor web

EJS – motor de plantillas para renderizar vistas

Bootstrap Icons – íconos visuales

CSS personalizado – estilo rosa tipo red social

👤 Autor
Nahuel Lozano 
📧 lozano.nahuel41@gmail.com 
💻 [github.com/NahueeLozano]https://github.com/NahueeLozano
📸 [Instagram]https://www.instagram.com/lozanonahue/