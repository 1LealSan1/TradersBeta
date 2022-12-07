const ModelUserClient = require("../models/ModelUserClient");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const ModelUserTraderOfertas = require("../models/ModelUserTraderOfertas")
const jwt = require('jsonwebtoken');

const express = require("express")
const router = express.Router();

router.post("/verPeticiones", verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.find({
            Status:'En espera'
        })
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
router.post('/obtenerOfertas', verifyToken, async (req, res) =>{
    try {
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');
        const data2 = await ModelUserTraderOfertas.find({
            IDUserTrader: token,
            Status: 'En espera'
        });
        res.send(data2)
    } catch (error) {
        console.log(error);
    }
})
router.post("/OfertarPeticion", verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.findById(req.body._id)

        const token = await jwt.verify(req.body.IDUserTrader, 'secretkey');

        const peticion = new ModelUserTraderOfertas({
            IDUserClient:data.IDUserClient,
            Description:data.Description,
            Oferta:req.body.Oferta,
            Location:data.Description,
            Oficio:data.Oficio,
            FechaHora:data.FechaHora,
            Status:data.Status,
            IDUserTrader:token,
            IDPeticion:req.body._id
        })
        await peticion.save();
        res.send("Oferta efectuada a la peticion")
    } catch (error) {
        console.log(error);
    }
})

router.post('/verTrabajosComplete', verifyToken, async (req, res) =>{
    try {
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');
        const data = await ModelUserTraderOfertas.find({
            IDUserTrader: token._id,
        })
        res.send(data)
    } catch (error) {
        console.log(error);
    }
})

router.put('/completarTrabajo', verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderOfertas.findByIdAndUpdate(req.body._id,{
            Status: 'Completado'
        })
        await ModelUserTraderPeticion.findByIdAndUpdate(data.IDPeticion,{
            Status: 'Completado'
        })
        res.send('Status del trabajo actualizado a completado')
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