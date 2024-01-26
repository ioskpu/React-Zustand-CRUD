const express = require('express');
const router = express.Router();
const tiposController = require('../controladores/tiposController');


//rutas CRUD para tipos de vehiculos

//crear tipo de vehiculo
router.post('/tipos', tiposController.crearTipoVehiculo);

//obtener todos los tipos de vehiculos
router.get('/tipos', tiposController.getAllTiposVehiculos);

//obtener un tipo de vehiculo por ID
router.get('/tipos/:id', tiposController.getTipoVehiculoById);

//actualizar un tipo de vehiculo
router.put('/tipos/:id', tiposController.updateTipoVehiculoById);

//eliminar un tipo de vehiculo
router.delete('/tipos/:id', tiposController.deleteTipoVehiculoById);

module.exports = router;