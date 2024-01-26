const express = require('express');
const router = express.Router();
const tiposController = require('../controladores/tiposController');


//rutas CRUD para tipos de vehiculos

//crear tipo de vehiculo
router.post('/api/tipos', tiposController.crearTipoVehiculo);

//obtener todos los tipos de vehiculos
router.get('/api/tipos', tiposController.getAllTiposVehiculos);

//obtener un tipo de vehiculo por ID
router.get('/api/tipos/:id', tiposController.getTipoVehiculoById);

//actualizar un tipo de vehiculo
router.put('/api/tipos/:id', tiposController.updateTipoVehiculoById);

//eliminar un tipo de vehiculo
router.delete('/api/tipos/:id', tiposController.deleteTipoVehiculoById);

module.exports = router;