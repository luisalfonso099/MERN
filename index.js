const dbConnection = require('./database/config')
const express      = require('express');
const cors         = require('cors');
require('dotenv').config()

// crear el servidor de express

const app = express();

// Base de datos

dbConnection()

//Cors

app.use(cors());

// Directorio publico

app.use(express.static('public'));

//Lectura y parceos del body

app.use(express.json())

// Rutas
app.use('/api/auth/', require('./routes/auth'));
app.use('/api/events/', require('./routes/events'));


// Escuchar peticiones

app.listen(process.env.PORT, ()=> {
    console.log('Servidor corriendo '+ process.env.PORT);
})