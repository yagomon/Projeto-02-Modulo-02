/* Importación del módulo mongoose. */
const mongoose = require('mongoose');

/**
 * Se conecta a la base de datos.
 */
function connectToDatabase() {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

/* Exportando la función `connectToDatabase` para que pueda usarse en otros archivos. */
module.exports = connectToDatabase;