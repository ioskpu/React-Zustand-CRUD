const mongoose = require('mongoose');


const marcaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    }
});

const Marca = mongoose.model('Marcas', marcaSchema);

module.exports = Marca;