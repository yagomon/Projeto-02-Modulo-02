const registroService = require('../service/registro.service');
const mongoose = require('mongoose'); 


/**
 * Es una función de controlador que llama a una función de servicio y devuelve el resultado al
 * cliente.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 */
const findRegistroController = async (req, res) => {
    res.send(await registroService.findRegistroService());
};

/**
 * Recibe una solicitud, comprueba si el ID es válido, si lo es, busca el ID en la base de datos, si lo
 * encuentra, devuelve el objeto, si no lo es, devuelve un error 404.
 * </código>
 * @param req - el objeto de solicitud
 * @param res - el objeto de respuesta
 * @returns Se está devolviendo el registro elegido.
 */
 const findRegistroByIdController = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res
      .status(400)
      .send({ message: 'ID inválido!' });
    return;
  };

  const chosenRegistro = await registroService.findRegistroByIdService(req.params.id);

  if (!chosenRegistro) {
    return res.status(404).send({ message: 'Registro não encontrado!' });
  };

  res.send(chosenRegistro);
};

/**
 * Es una función de controlador que llama a una función de servicio que devuelve un valor.
 * @param req - El objeto de solicitud representa la solicitud HTTP y tiene propiedades para la cadena
 * de consulta de solicitud, parámetros, cuerpo, encabezados HTTP, etc.
 * @param res - El objeto de respuesta.
 */
const findRegistroNoIdController = (req, res) => {
  res.send(registroService.findRegistroNoIdService());
};

/**
 * Crea un nuevo registro
 * @param req - El objeto de la solicitud.
 * @param res - el objeto de respuesta
 * @returns Se está devolviendo el newRegistro.
 */
const createRegistroControllers = async (req, res) => {
  const newRegistro = await registroService.createRegistroService(req.body);

  res.send(newRegistro);
};

/**
 * Actualiza un registro en la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - el objeto de respuesta
 * @returns Se devuelve el registro actualizado.
 */
const updateRegistroController = async (req, res) => {
  const updatedRegistro = await registroService.updateRegistroService(
    req.params.id,
    req.body,
  );

  res.send(updatedRegistro);
};

/**
 * Elimina un registro de la base de datos.
 * @param req - El objeto de la solicitud.
 * @param res - el objeto de respuesta
 * @returns el resultado de la llamada a la función.
 */
const deleteRegistroController = async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenRegistro = await registroService.findRegistroByIdService(req.params.id);

  if (!chosenRegistro) {
    return res.status(404).send({ message: 'Registro não encontrado!' });
  }

  await registroService.deleteRegistroService(req.params.id);

  res.send({ message: 'Registro deletado com sucesso!' });
};

/* Exportación de las funciones para ser utilizadas en otros archivos. */
module.exports = {
    findRegistroController,
    findRegistroByIdController,
    createRegistroControllers,
    updateRegistroController,
    deleteRegistroController,
    findRegistroNoIdController
};




