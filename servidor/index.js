const express = require("express");
const conectionDb = require("./BaseDeDatos/Db");

//creamos el servidor
const app = express();

//conectar la bd
conectionDb();

//habilitamos el uso de json
app.use(express.json());

//asignamos puerto
port=5000;

//asignamos una ruta
app.use("/api/users", require('./rutas/users'));

app.listen(port, () => {
    console.log("el servidor corre en el puerto", port)
})