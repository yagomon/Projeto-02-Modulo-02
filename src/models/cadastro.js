const mongoose = require('mongoose');

/* Creación de un nuevo esquema para la base de datos. */
const CadastroSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cpf: { type: String, required: true },
    estadoSivil: { type: String, required: true },
    dataNascimento: { type: String, required: true },
});

/* Creación de un nuevo modelo llamado catastro. */
const cadastro = mongoose.model('cadastro', CadastroSchema);

module.exports = cadastro;