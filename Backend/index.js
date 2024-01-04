const express = require('express');
const {dbConnection} = require('./DB/config');

//crear el servidor de express
const app = express();

//llamando bd
dbConnection();

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: 'true',
        msg: 'Hola Mundo'
    })
});

//ejecutar el servidor
app.listen( 3010, () => {
    console.log('Se esta ejecutando el servidor en el puerto ' + 3010)
})

