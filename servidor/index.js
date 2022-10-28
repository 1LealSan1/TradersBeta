const express = require("express");
const conectarDB = require("./configDB/DB");

//creamos el servidor
const app = express();

//asignamos puerto
port=5000;

//permitimos el uso de json
app.use(express.json());

//conectar a la bd
conectarDB();

app.use("/Users", require("./routes/RouteUserClient"));
app.use("/UsersTraders", require("./routes/RouteUserTrader"));

app.listen(port, () => {
    console.log("el servidor corre en el puerto", port);
})