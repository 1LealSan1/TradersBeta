const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserTrader");""

//api/usuariosTrader
router.post("/", UserTraderController.crearUserTrader)

//api/usuariosTraderPeticion
router.post("/Peticion", UserTraderController.crearUserTraderPeticion)

module.exports = router;