const express = require("express");
const router = express.Router();
const controllerUser = require("../controladores/controllerUsers");

//api//usuariosTraders
router.post('/', controllerUser.crearUsuarioTrader);

module.exports = router