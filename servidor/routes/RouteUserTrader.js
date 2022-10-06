const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserTrader");""

//api/usuariosTrader
router.post("/", UserTraderController.crearUserTrader)

module.exports = router;