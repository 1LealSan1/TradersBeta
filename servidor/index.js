const express = require("express");
const conectarDB = require("./configDB/DB");
const cors = require('cors');
//creamos el servidor
const app = express();

//asignamos puerto
port=5000;

//permite la conexion de expresss-angular
app.use(cors());

//permitimos el uso de json
app.use(express.json());

//conectar a la bd
conectarDB();

app.use("/Users", require("./controllers/ControllerUserClient"));
app.use("/UsersTraders", require("./controllers/ControllerUserTrader"));

app.listen(port, () => {
    console.log("el servidor corre en el puerto", port);
})