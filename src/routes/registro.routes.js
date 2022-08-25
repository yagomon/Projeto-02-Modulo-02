/* Importación de los archivos swagger-ui-express y swagger.json. */
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

/* Esto es importar el módulo express. */
const express = require('express');
/* Creación de un nuevo objeto de enrutador. */
const router = express.Router();

/* Importando el archivo registro.controller.js. */
const registroControllers = require('../controllers/registro.controller');
const { validId, validObjectBody } = require('../middlewares/cadastro.middlewares');

/* Una ruta a la documentación de swagger. */
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// ----------------------- GET -----------------------
/* Una ruta a la página `registro`. */
router.get('/pessoas', registroControllers.findRegistroController);
/* Una ruta a la página `registro` con el id del usuario. */
router.get('/pessoa/:id', validId, registroControllers.findRegistroByIdController);
/* Una ruta a la página `registro` con la identificación del usuario. */
router.get('/pessoa', validId, registroControllers.findRegistroNoIdController);

// ----------------------- POST -----------------------
/* Creando una nueva ruta a la página `registro` con el id del usuario. */
router.post('/create', validObjectBody, registroControllers.createRegistroControllers);

// ----------------------- PUT -----------------------
/* Actualización de los datos en la base de datos. */
router.put('/update/:id', validId, validObjectBody, registroControllers.updateRegistroController);

// ----------------------- DELETE -----------------------
/* Eliminación de datos de la base de datos. */
router.delete('/delete/:id', validId, registroControllers.deleteRegistroController);




module.exports = router;