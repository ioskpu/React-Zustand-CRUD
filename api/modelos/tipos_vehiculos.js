const mongoose = require('mongoose');

const tipoVehiculoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
})

tipoVehiculoSchema.add({ _id: mongoose.Types.ObjectId });

const TipoVehiculo = mongoose.model('TiposVehiculos', tipoVehiculoSchema);

module.exports = TipoVehiculo;