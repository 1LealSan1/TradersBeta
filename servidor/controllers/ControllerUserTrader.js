const ModelUserTrader = require("../models/ModelUserTrader");

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