const express = require("express")
const router = express.Router();
const ControllerToken = require("../controllers/ControllerToken")

router.get('/validar', ControllerToken.ValidadToken);
module.exports = router;