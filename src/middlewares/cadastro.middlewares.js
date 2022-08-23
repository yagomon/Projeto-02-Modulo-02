const mongoose = require('mongoose');

/**
 * Si la identificación no es válida, devuelva un código de estado 400 y un mensaje. De lo contrario,
 * continúe con el siguiente middleware.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 * @param next - La siguiente función de middleware en la pila.
 * @returns el código de estado 400 y el mensaje 'Id invalido!'
 */
const validId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: 'Id invalido!'});
    }
    next();
};

/**
 * Comprueba si el cuerpo de la solicitud está vacío o si tiene los campos obligatorios. Si no es así,
 * devuelve un código de estado 400 y un mensaje. Si lo hace, llama a la siguiente función.
 * @param req - El objeto de la solicitud.
 * @param res - El objeto de respuesta.
 * @param next - La siguiente función de middleware en la pila.
 * @returns el código de estado 400 y un mensaje.
 */
const validObjectBody = (req, res, next) => {
    if (
        !req.body ||
        !req.body.nome ||
        !req.body.sobrenome ||
        !req.body.cpf ||
        !req.body.estadoSivil ||
        !req.body.dataNascimento
    ) {
        return res
        .status(400)
        .send({ message: 'É obrigatorio preencher todos os campos do cadastro.'});
    }
    next();
};

module.exports = {
    validId,
    validObjectBody,
};