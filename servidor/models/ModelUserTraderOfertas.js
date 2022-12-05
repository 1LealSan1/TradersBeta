const mongoose = require('mongoose');

const UserTraderOfertaSchema = mongoose.Schema({
    IDUserClient: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Oferta: {
        type: Number,
        required: true
    },
    Location:{
        type: String,
        required: true
    },
    Oficio: {
        type: String,
        required: true
    },
    FechaHora:{
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
        required: true
    },
    IDPeticion:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UsersTradersOferta', UserTraderOfertaSchema);
