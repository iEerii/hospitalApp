const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./DB/config');

//crear el servidor de express
const app = express();

//configurando CORS
app.use(cors());

//carpeta pública
app.use( express.static('public') );

//Lectura y parseo del body
app.use(express.json());

//llamando bd
dbConnection();

//rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busqueda'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));

//ejecutar el servidor
app.listen( process.env.PORT, () => {
    console.log('Se esta ejecutando el servidor en el puerto ' + process.env.PORT)
})

