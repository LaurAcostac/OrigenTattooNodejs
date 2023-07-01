const mongoose = require('../config/conexion');

const SchemaPiercing = new mongoose.Schema({
    piercing: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    zona: {
        type: String,
        required: true
    },
    imagen: {
        type: String
    }
});

const piercing = mongoose.model('Piercing', SchemaPiercing);

module.exports = piercing