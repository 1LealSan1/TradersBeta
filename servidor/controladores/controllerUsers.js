const Users = require("../models/Users");

exports.crearUsuarioTrader = async (req, res) =>{
    try {
        let user;
        //creamos nuestro usuario
        user = new Users(req.body);

        await user.save() 
        res.send(user)

    } catch (error) {
        console.log(error);
    }
}