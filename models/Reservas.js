const mongoose = require('../config/conexion');

const SchemaReserva = new mongoose.Schema({
    fecha: {
        type: Date,
        required: true
    },
    hora: {
        type: Date,
        required: true
    },
    tatuador: {
    },
    cliente:{

    },

})

const reserva = mongoose.model('Reserva', SchemaReserva);

module.exports = reserva