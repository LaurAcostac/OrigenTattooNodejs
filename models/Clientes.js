const mongoose = require('../config/conexion');

const SchemaCliente = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    celular: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    alergias: {
        type: String
    },
    edad: {
        type: String,
        required: true
    },
    tatuaje: {
        type: String
    },
    Piercing: {
        type: String
    },
    contrasena: {
        type: String,
        required: true
    }
});

const cliente = mongoose.model('Cliente', SchemaCliente);

module.exports = cliente