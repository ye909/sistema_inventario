const express = require("express")
const app = express()

// Ruta para mostrar el formulario de inicio de sesión
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000,() =>{
    console.log(`Servidor escuchando en http://localhost:3000`);
})