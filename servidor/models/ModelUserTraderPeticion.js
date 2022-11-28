const mongoose = require('mongoose');

const UserTraderPeticionSchema = mongoose.Schema({
    IDUserClient: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Precio: {
        type: Number,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    Oficio: {
        type: String,
        required: true
    },
    metodoPago:{
        type: String,
        required: true
    },
    Status: {
        //tipo: en espera, en progreso, terminado
        type: String,
        required: true
    },
    IDUserTrader:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('UsersTradersPeticions', UserTraderPeticionSchema);
