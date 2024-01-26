const TiposVehiculos = require('../modelos/tipos_vehiculos');

//controlador para crear un nuevo tipo de vehiculo

exports.crearTipoVehiculo = async (req, res) => {
    try {
        const nuevoTipoVehiculo = new TiposVehiculos(req.body);
        const tipoVehiculoGuardado = await nuevoTipoVehiculo.save();
        res.status(201).json(tipoVehiculoGuardado);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el tipo de vehiculo' });
    }
};


//controlador para obtener todos los tipos de vehiculos

exports.getAllTiposVehiculos = async (req, res) => {
    try {
        const tiposVehiculos = await TiposVehiculos.find();
        res.status(200).json(tiposVehiculos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los tipos de vehiculos' });
    }
};


//controlador para obtener un tipo de vehiculo por su ID

exports.getTipoVehiculoById = async (req, res) => {
    try {
        const tipoVehiculo = await TiposVehiculos.findById(req.params.id);
        if (!tipoVehiculo) {
            return res.status(404).json({ error: 'Tipo de vehiculo no encontrado' });
        }
        res.status(200).json(tipoVehiculo);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el tipo de vehiculo' });
    }
};


//controlador para actualizar un tipo de vehiculo por su ID

exports.updateTipoVehiculoById = async (req, res) => {
    try {
        const tipoVehiculoActualizado = await TiposVehiculos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tipoVehiculoActualizado) {
            return res.status(404).json({ error: 'Tipo de vehiculo no encontrado' });
        }
        res.status(200).json(tipoVehiculoActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el tipo de vehiculo' });
    }
};


//controlador para eliminar un tipo de vehiculo por su ID

exports.deleteTipoVehiculoById = async (req, res) => {
    try {
        const tipoVehiculoEliminado = await TiposVehiculos.findByIdAndDelete(req.params.id);
        if (!tipoVehiculoEliminado) {
            return res.status(404).json({ error: 'Tipo de vehiculo no encontrado' });
        }
        res.status(200).json(tipoVehiculoEliminado);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el tipo de vehiculo' });
    }
};