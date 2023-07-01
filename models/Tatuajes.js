const mongoose = require('../config/conexion');

const SchemaTatuajes = new mongoose.Schema({
    tatuaje: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    tamaño: {
        type: String
    },
    color: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    }

});

const tatuaje = mognoose.model('Tatuaje', SchemaTatuajes);

module.exports = tatuaje