const express = require("express");

//creamos el servidor
const app = express();
//asignamos puerto
port=4000;

//asignamos una ruta
app.get("/",(req, res) =>{
    res.send("hola a todos el servidor corre en el puerto " + port)
})

app.listen(port, () => {
    console.log("el servidor corre en el puerto", port)
})