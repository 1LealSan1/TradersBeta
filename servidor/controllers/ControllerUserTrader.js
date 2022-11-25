const ModelUserTrader = require("../models/ModelUserTrader");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const jwt = require('jsonwebtoken');
exports.CrearUserTrader = async (req, res) =>{
    try {
        let user;

        user = new ModelUserTrader(req.body);

        await user.save();
        res.send(user);
        
    } catch (error) {
        console.log(error);
    }
}

exports.AceptarPeticion = async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            IDUserTrader: req.body.IDUserTrader,
            Status: "En Espera"
        });
        // Send response in here
        res.send();
    } catch (error) {
        console.log(error)
    }
}
exports.TerminarPeticion = async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            Status: "Completado"
        })
        res.send();
    } catch (error) {
        console.log(error);
    }
}
exports.CancelarPeticion = async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            Status: "En espera"
        })        
        res.send();
    } catch (error) {
        console.log(error);
    }
}
exports.verPeticionesTraderAceptadas = async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.find({
            IDUserTrader : req.params.id
        });
        res.json(data)
    } catch (error) {
        console.log(error);
    }
}

exports.ActualizarUbicacion = async (req, res) =>{
    try {
        await ModelUserTrader.findByIdAndUpdate(req.params.id, {
            Ubicacion: req.body.Ubicacion
        }) 
        res.send();
    } catch (error) {
        console.log(error);
    }
}
exports.IniciarSesionTrader = async (req, res) => {
    const { telefono, Password } = req.body;
    const data = await ModelUserTrader.findOne({telefono});
    if (!data) return res.status(401).send('The Telefono doen\' exists');
    if (data.Password !== Password) return res.status(401).send('Wrong Password');
    const token = jwt.sign({_id: data._id}, 'secretkey');
    return res.status(200).json({token});
}
