
// Importamos las dependencias
const express = require('express');
const mysql2 = require('mysql2');
const bodyParser = require('body-parser');



// Configuración de la base de datos
const db = mysql2.createConnection({
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