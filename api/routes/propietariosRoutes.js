const express = require('express');
const router = express.Router();
const propietariosController = require('../controladores/propietariosController');

//rutas crud para propietarios

//crear propietario
router.post('/propietarios', propietariosController.crearPropietario);

//obtener todos los propietarios
router.get('/propietarios', propietariosController.getAllPropietarios);

//obtener un propietario por ID
router.get('/propietarios/:id', propietariosController.getPropietarioById);

//actualizar un propietario
router.put('/propietarios/:id', propietariosController.updatePropietarioById);

//eliminar un propietario
router.delete('/propietarios/:id', propietariosController.deletePropietarioById);

module.exports = router;