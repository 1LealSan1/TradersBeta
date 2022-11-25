const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserClient");""

//api/usuariosTrader
router.post("/CrearUser", UserTraderController.crearUserClient)

//api/usuariosCrearPeticion
router.post("/Peticion", UserTraderController.crearUserTraderPeticion)

//api/usuariospeticioneshechas
router.get('/Peticions/:id', UserTraderController.verPeticionesUser)

//api/actualizarUbicacion
router.put("/Ubicacion/:id", UserTraderController.ActualizarUbicacion)

router.post('/Login', UserTraderController.IniciarSesionClient)
module.exports = router;