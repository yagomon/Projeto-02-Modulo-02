/* Importación del módulo express. */
const express = require('express');
/* Un middleware que le permite realizar solicitudes desde diferentes dominios. */
const cors = require('cors');
/* Importación del archivo de ruta. */
const route = require('./src/routes/registro.routes');
/* Importando el archivo dataBase.js. */
const connectToDatabase = require('./src/dataBase/dataBase');

/* Definición del puerto que estará escuchando el servidor. */
const port = 3000;

/* Creando una instancia del módulo express. */
const app = express();

/* Un middleware que analiza el cuerpo de la solicitud y lo pone a disposición en la propiedad
req.body. */
app.use(express.json());
/* Un middleware que permite solicitudes de diferentes dominios. */
app.use(cors());

/* Conexión a la base de datos. */
connectToDatabase();

// Rotas
/* Diciéndole al servidor que use el archivo de ruta. */
app.use('/registro', route);

/* Escuchando el puerto 3000. */
app.listen(port, () => {
    console.log(`Rodando em http://localhost:${port}`);
});