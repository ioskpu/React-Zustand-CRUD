const Propietario = require('../modelos/propietarios');

//crear un nuevo propietario
exports.crearPropietario = async (req, res) => {
  try {
    const { nombre, apellido, paisResidencia, marcas, tipos } = req.body;
    
    // Crear el propietario en la base de datos
    const nuevoPropietario = await Propietario.create({
      nombre,
      apellido,
      paisResidencia,
      marcas,
      tipos,
    });

    res.status(201).json(nuevoPropietario);
  } catch (error) {
    console.error('Error al crear un nuevo propietario', error);
    res.status(500).json({ error: 'Error al crear un nuevo propietario' });
  }
};

//mostrar todos los propietarios
exports.getAllPropietarios = async (req, res) => {
  try {
    const propietarios = await Propietario.find().populate('marcas tipos');
    res.status(200).json(propietarios);
  } catch (error) {
    console.error('Error al obtener propietarios', error);
    res.status(500).json({ error: 'Error al obtener propietarios' });
  }
};

//mostrar un propietario por ID
exports.getPropietarioById = async (req, res) => {
  try {
    const propietario = await Propietario.findById(req.params.id).populate('marcas tipos');
    
    if (!propietario) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }

    res.status(200).json(propietario);
  } catch (error) {
    console.error('Error al obtener propietario por ID', error);
    res.status(500).json({ error: 'Error al obtener propietario por ID' });
  }
};

//actualizar un propietario por ID
exports.updatePropietarioById = async (req, res) => {
  try {
    const { nombre, apellido, paisResidencia, marcas, tipos } = req.body;
    
    const propietarioActualizado = await Propietario.findByIdAndUpdate(
      req.params.id,
      { nombre, apellido, paisResidencia, marcas, tipos },
      { new: true, runValidators: true }
    ).populate('marcas tipos');

    if (!propietarioActualizado) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }

    res.status(200).json(propietarioActualizado);
  } catch (error) {
    console.error('Error al actualizar propietario por ID', error);
    res.status(500).json({ error: 'Error al actualizar propietario por ID' });
  }
};

//eliminar un propietario por ID
exports.deletePropietarioById = async (req, res) => {
  try {
    const propietarioEliminado = await Propietario.findByIdAndRemove(req.params.id).populate('marcas tipos');

    if (!propietarioEliminado) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }

    res.status(200).json(propietarioEliminado);
  } catch (error) {
    console.error('Error al eliminar propietario por ID', error);
    res.status(500).json({ error: 'Error al eliminar propietario por ID' });
  }
};
