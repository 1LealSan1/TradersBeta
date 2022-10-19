const ModelUserTrader = require("../models/ModelUserTrader");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");

exports.crearUserTrader = async (req, res) =>{
    try {
        let userTrader;

        userTrader = new ModelUserTrader(req.body);

        await userTrader.save();
        res.send(userTrader);
        
    } catch (error) {
        console.log(error);
    }
}

exports.crearUserTraderPeticion = async (req, res) =>{
    try {
        let peticion;

        peticion = new ModelUserTraderPeticion(req.body);

        await peticion.save();
        res.send(peticion);
        
    } catch (error) {
        console.log(error);
    }
}