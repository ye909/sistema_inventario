// Importamos las dependencias
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Creamos la aplicación Express
const app = express();
const port = 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // usuario por defecto de MySQL en XAMPP
    password: '',  // si no tienes contraseña, déjalo vacío
    database: 'login_db'
});

// Conectar a la base de datos
db.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida.');
});

// Middleware para analizar los datos de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta para mostrar el formulario de inicio de sesión
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Consultamos la base de datos para verificar las credenciales
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta: ', err);
            res.status(500).send('Error interno');
            return;
        }

        if (results.length > 0 && results[0].password === password) {
            res.send('¡Bienvenido!');
        } else {
            res.send('Credenciales incorrectas');
        }
    });
});

// Iniciamos el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
