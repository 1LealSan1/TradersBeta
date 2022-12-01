const express = require("express")
const router = express.Router();
const UserTraderController = require("../controllers/ControllerUserTrader");

//api/usuariosTrader
router.post("/CrearUser", UserTraderController.CrearUserTrader);
//api/aceptarPeticion
router.put('/PeticionAceptada/:id',UserTraderController.AceptarPeticion);
//api/usuariospeticionesaceptadas
router.get('/PeticionesAceptadas/:id', UserTraderController.verPeticionesTraderAceptadas)
//api/terminarPeticion
router.put('/PeticionTerminada/:id', UserTraderController.TerminarPeticion)
//api/cacelarPeticion
router.put('/PeticionCancelada/:id', UserTraderController.CancelarPeticion)
//api/actualizarUbicacion
router.put("/Ubicacion/:id",UserTraderController.ActualizarUbicacion)
//api/login
router.post('/Login', UserTraderController.IniciarSesionTrader)


module.exports = router;