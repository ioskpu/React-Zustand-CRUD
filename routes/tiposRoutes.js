const express = require('express');
const router = express.Router();
const tiposController = require('../controladores/tiposController');


//rutas CRUD para tipos de vehiculos

//crear tipo de vehiculo
router.post('/tipos', tiposController.crearTipo);

//obtener todos los tipos de vehiculos
router.get('/tipos', tiposController.getAllTipos);

//obtener un tipo de vehiculo por ID
router.get('/tipos/:id', tiposController.getTipoById);

//actualizar un tipo de vehiculo
router.put('/tipos/:id', tiposController.actualizarTipo);

//eliminar un tipo de vehiculo
router.delete('/tipos/:id', tiposController.deleteTipoById);

module.exports = router;