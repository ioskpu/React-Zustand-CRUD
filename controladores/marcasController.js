const Marca = require('../modelos/marcas_vehiculos');

// controlador para crear una nueva marca
exports.crearMarca = async (req, res) => {
    try {
        const nuevaMarca = new Marca(req.body);
        const marcaGuardada = await nuevaMarca.save();
        res.status(201).json(marcaGuardada);

    } catch (error) {
        res.status(500).json({ error: 'Error al crear la marca' });
    }
};

//controlador para obtener todas las marcas

exports.getAllMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find();
        res.status(200).json(marcas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las marcas' });
    }
};

//controlador para obtener una marca por su ID

exports.getMarcaById = async (req, res) => {
    try {
        const marca = await Marca.findById(req.params.id);
        if (!marca) {
            return res.status(404).json({ error: 'Marca no encontrada' });
        }
        res.status(200).json(marca);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la marca' });
    }
};


//controlador para actualizar una marca por ID

exports.updateMarcaById = async (req, res) => {
    try {
        const marcaActualizada = await Marca.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!marcaActualizada) {
            return res.status(404).json({ error: 'Marca no encontrada' });
        }
        res.status(200).json(marcaActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la marca' });
    }
};


//controlador para eliminar una marca por ID

exports.deleteMarcaById = async (req, res) => {
    try {
        const marcaEliminada = await Marca.findByIdAndDelete(req.params.id);
        if (!marcaEliminada) {
            return res.status(404).json({ error: 'Marca no encontrada' });
        }
        res.status(200).json(marcaEliminada);
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la marca' });
    }
};