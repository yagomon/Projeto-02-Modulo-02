
const Registro = require('../models/cadastro');


/**
 * Devuelve una promesa que resuelve el resultado del método find() del modelo Registro.
 * @returns Una matriz de objetos.
 */
const findRegistroService = async () => {
    return await Registro.find();
};


/**
 * Esta función devuelve una promesa que resuelve el resultado del método findById() del modelo
 * Registro.
 * @param id - el id del registro que desea encontrar
 * @returns Una promesa.
 */
const findRegistroByIdService = async (id) => {
    return await Registro.findById(id);
};


/**
 * Devuelve una matriz de todas las identificaciones en la matriz Registro.
 * @returns Una matriz de identificadores.
 */
const findRegistroNoIdService = async () => {
    const registroNiId = await Registro.map((item) => item.id);
    return registroNiId;
};



/**
 * Crea un nuevo registro en la base de datos.
 * @param newRegistro - {
 * @returns El registro creado.
 */
const createRegistroService = async (newRegistro) => {
    const RegistroCriado = await Registro.create(newRegistro)
    return RegistroCriado;
};



/**
 * Recibe un id y un objeto registroEdited, luego encuentra el registro by id y lo actualiza con el
 * objeto registroEdited.
 * @param id - el id del documento a actualizar
 * @param registroEdited - {
 * @returns El registro actualizado.
 */
const updateRegistroService = async (id, registroEdited) => {
    const registroAtualizado = await Registro.findByIdAndUpdate(id, registroEdited);
    return registroAtualizado;
};



/**
 * Esta función eliminará un registro de la base de datos y devolverá el registro eliminado.
 * @param id - el id del documento que se va a eliminar
 * @returns El documento eliminado.
 */
const deleteRegistroService = async (id) => {
    return await Registro.findByIdAndDelete(id);
};


/* Exportación de las funciones a utilizar en el controlador. */
module.exports = {
    findRegistroService,
    findRegistroByIdService,
    createRegistroService,
    updateRegistroService,
    deleteRegistroService,
    findRegistroNoIdService
};