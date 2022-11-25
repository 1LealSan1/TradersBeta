const ModelUserClient = require("../models/ModelUserClient");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const jwt = require('jsonwebtoken');

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

exports.verPeticionesUser = async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.find({
            IDUserClient : req.params.id
        });
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

exports.ActualizarUbicacion = async (req, res) =>{
    try {
        await ModelUserClient.findByIdAndUpdate(req.params.id, {
            Ubicacion: req.body.Ubicacion
        }) 
        res.send();
    } catch (error) {
        console.log(error);
    }
}
exports.IniciarSesionClient = async (req, res) => {
    const { telefono, Password } = req.body;
    const data = await ModelUserClient.findOne({telefono});
    if (!data) return res.status(401).send('The Telefono doen\' exists');
    if (data.Password !== Password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({_id: data._id}, 'secretkey');
    return res.status(200).json({token});
}