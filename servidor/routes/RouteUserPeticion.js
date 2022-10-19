const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserTrader");""

//api/usuariosTraderPeticion
router.post("/", UserTraderController.crearUserTraderPeticion)

module.exports = router;