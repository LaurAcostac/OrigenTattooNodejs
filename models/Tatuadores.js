const mongoose = require('../config/conexion');

const schemaTatuador = new mongoose.Schema({

    nombre:{
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
        type: String
    },
    documentoId: {
        type: String,
        required: true
    },
    tatuaje: {
        type: String
    },
    piercing: {
        type: String
    },
    contrasena: {
        type: String,
        required: true
    }
});

const tatuador = mongoose.model('Tatuador', schemaTatuador)

module.exports = tatuador