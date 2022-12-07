const ModelUserClient = require("../models/ModelUserClient");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const ModelUserTraderOfertas = require("../models/ModelUserTraderOfertas")
const jwt = require('jsonwebtoken');

const express = require("express")
const router = express.Router();

router.post('/LoginUser', async (req, res)=> {
    const { Telefono, Password } = req.body;
    const data = await ModelUserClient.findOne({Telefono});
    
    if (!data) return res.status(401).send('El numero de telefono no existe');
    if (data.Password !== Password) return res.status(401).send('Contraseña incorrecta');
    
    const token = jwt.sign({_id: data._id}, 'secretkey');
    return res.status(200).json({token});
})

router.post("/CrearUser", async (req, res) =>{
    const data = await ModelUserClient.findOne({
        Telefono : req.body.Telefono
    });
    if(data == null){
        try {
            let user;
    
            user = new ModelUserClient(req.body);
    
            await user.save();
    
            const token = jwt.sign({_id: user._id}, 'secretkey');
            res.status(200).json({token});
            
        } catch (error) {
            console.log(error);
        }
    }else if(data.Telefono == req.body.Telefono){
        res.send("El numero de telefono ya existe")
    }
})

router.post("/CrearPeticion", verifyToken, async (req, res) =>{
    try {
        let peticion;
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');

        req.body.IDUserClient=token;
        
        peticion = new ModelUserTraderPeticion(req.body);

        await peticion.save();
        res.send(peticion);
        
    } catch (error) {
        console.log(error);
    }
})

router.post('/Peticions', verifyToken, async (req, res) =>{
    try {
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');

        const data = await ModelUserTraderPeticion.find({
            IDUserClient : token
        });
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

router.post('/obtenerOfertasUser', verifyToken, async (req, res) =>{
    try {
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');

        const data = await ModelUserTraderOfertas.find({
            IDUserClient : token,
            Status:'En espera'
        });
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

router.put('/AceptarOferta', verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderOfertas.findByIdAndUpdate(req.body._id,{
            Status: 'En proceso'
        })
        await ModelUserTraderPeticion.findByIdAndUpdate(req.body.IDPeticion,{
            Precio: data.Oferta,
            IDUserTrader: data.IDUserTrader,
            Status: 'En proceso'
        })

        await ModelUserTraderOfertas.deleteMany({
            IDPeticion: req.body.IDPeticion,
            Status: 'En espera'
        })

        return res.send('Peticion Aceptada')
    } catch (error) {
        console.log(error);
    }
})

router.delete('/PeticionCancelada/:_id', verifyToken, async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndDelete(req.params) 
        await ModelUserTraderOfertas.findOneAndDelete({
            IDPeticion: req.params
        }) 
        return res.send('Peticion cancelada')
    } catch (error) {
        console.log(error);
    }
})

async function verifyToken(req, res, next) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		req.userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

module.exports = router;