const ModelUserTrader = require("../models/ModelUserTrader");
const ModelUserTraderPeticion = require("../models/ModelUserTraderPeticion");
const jwt = require('jsonwebtoken');

const express = require("express")
const router = express.Router();

router.post('/LoginTrader', async (req, res)=> {
    const { telefono, Password } = req.body;
    const data = await ModelUserTrader.findOne({telefono});

    if (!data) return res.status(401).send('The Telefono doen\' exists');
    if (data.Password !== Password) return res.status(401).send('Wrong Password');

    const token2 = jwt.sign({_id: data._id}, 'secretkey');
    return res.status(200).json({token2});
})

router.post("/CrearTrader", async (req, res) =>{
    const data = await ModelUserTrader.findOne({
        Telefono : req.body.Telefono
    });
    if(data == null){
        try {
            let user;
    
            user = new ModelUserTrader(req.body);
    
            await user.save();
    
            const token2 = jwt.sign({_id: user._id}, 'secretkey');
            res.status(200).json({token2});
            
        } catch (error) {
            console.log(error);
        }
    }else if(data.Telefono == req.body.Telefono){
        res.send("El numero de telefono ya existe")
    }
})

router.put('/PeticionAceptada/:id',  verifyToken, async (req, res) =>{
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
        await ModelUserTrader.findByIdAndUpdate(req.params.id, {
            Ubicacion: req.body.Ubicacion
        }) 
        res.send();
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