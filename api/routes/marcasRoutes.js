const express = require('express');
const router = express.Router();
const marcasController = require('../controladores/marcasController');

//rutas CRUD para marcas de vehiculos

//crear marca
router.post('/marcas', marcasController.crearMarca);

//obtener todas las marcas
router.get('/marcas', marcasController.getAllMarcas);

//obtener una marca por ID
router.get('/marcas/:id', marcasController.getMarcaById);

//actualizar una marca
router.put('/marcas/:id', marcasController.updateMarcaById);

//eliminar una marca
router.delete('/marcas/:id', marcasController.deleteMarcaById);

module.exports = router;