const mongoose = require('mongoose');

const propietarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  paisResidencia: { type: String, required: true },
  marcas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Marca' }],
  tipos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TipoVehiculo' }],
});

const Propietario = mongoose.model('Propietario', propietarioSchema);

module.exports = Propietario;
