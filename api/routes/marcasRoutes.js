const express = require('express');
const router = express.Router();
const marcasController = require('../controladores/marcasController');

//rutas CRUD para marcas de vehiculos

//crear marca
router.post('/api/marcas', marcasController.crearMarca);

//obtener todas las marcas
router.get('/api/marcas', marcasController.getAllMarcas);

//obtener una marca por ID
router.get('/api/marcas/:id', marcasController.getMarcaById);

//actualizar una marca
router.put('/api/marcas/:id', marcasController.updateMarcaById);

//eliminar una marca
router.delete('/api/marcas/:id', marcasController.deleteMarcaById);

module.exports = router;