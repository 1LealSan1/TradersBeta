const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserClient");""

//api/usuariosTrader
router.post("/", UserTraderController.crearUserClient)

//api/usuariosTraderPeticion
router.post("/Peticion", UserTraderController.crearUserTraderPeticion)

module.exports = router;