const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./DB/config');

//crear el servidor de express
const app = express();

//configurando CORS
app.use(cors());

//llamando bd
dbConnection();

//rutas
app.use('/api/usuarios', require('./routes/usuarios'));

//ejecutar el servidor
app.listen( process.env.PORT, () => {
    console.log('Se esta ejecutando el servidor en el puerto ' + process.env.PORT)
})

