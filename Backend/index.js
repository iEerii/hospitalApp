const express = require('express');

//crear el servidor de express
const app = express();

//rutas
app.get('/', (req, res) => {
    res.json({
        ok: 'true',
        msg: 'Hola Mundo'
    })
});

//ejecutar el servidor
app.listen( 3001, () => {
    console.log('Se esta ejecutando el servidor en el puert' + 3001)
})

