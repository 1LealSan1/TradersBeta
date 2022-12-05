const ModelUserClient = require("../models/ModelUserClient");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const ModelUserTraderOfertas = require("../models/ModelUserTraderOfertas")
const jwt = require('jsonwebtoken');

const express = require("express")
const router = express.Router();

router.put('/PeticionAceptada/:id',  verifyToken, async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            IDUserTrader: req.body.IDUserTrader,
        });
        // Send response in here
        res.send();
    } catch (error) {
        console.log(error)
    }
})

router.put('/PeticionCompletada/:id', verifyToken,async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            Status: "Completado"
        })
        res.send();
    } catch (error) {
        console.log(error);
    }
})

router.put('/PeticionCancelada/:id', verifyToken, async (req, res) =>{
    try {
        await ModelUserTraderPeticion.findByIdAndUpdate(req.params.id, {
            IDUserTrader: "",
            Status: "En espera"
        })        
        res.send();
    } catch (error) {
        console.log(error);
    }
})

router.get('/PeticionesAceptadas/:id', verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.find({
            IDUserTrader : req.params.id
        });
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})

router.put("/Ubicacion/:id", verifyToken,async (req, res) =>{
    try {
        await ModelUserClient.findByIdAndUpdate(req.params.id, {
            Ubicacion: req.body.Ubicacion
        }) 
        res.send();
    } catch (error) {
        console.log(error);
    }
})

router.post("/verPeticiones", verifyToken, async (req, res) =>{
    try {
        const data = await ModelUserTraderPeticion.find()
        res.send(data);
    } catch (error) {
        console.log(error);
    }
})
router.post('/obtenerOfertas', verifyToken, async (req, res) =>{
    try {
        const token = await jwt.verify(req.body.IDUserClient, 'secretkey');
        const data2 = await ModelUserTraderOfertas.find({
            IDUserTrader: token
        });
        console.log(data2)
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