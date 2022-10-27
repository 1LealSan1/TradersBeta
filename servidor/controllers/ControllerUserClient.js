const ModelUserClient = require("../models/ModelUserClient");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");

exports.crearUserClient = async (req, res) =>{
    try {
        let user;

        user = new ModelUserClient(req.body);

        await user.save();
        res.send(user);
        
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