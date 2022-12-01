const mongoose = require('mongoose');

const UserTraderSchema = mongoose.Schema({
    Telefono: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: false
    },
    Password: {
        type: String,
        required: true
    },
    Ubicacion: {
        type: String,
        required: false
    },
    Oficio:{
        type: String,
        required: false
    }
});

module.exports = mongoose.model('UsersTraders', UserTraderSchema);
