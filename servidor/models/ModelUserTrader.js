const mongoose = require('mongoose');

const UserTraderSchema = mongoose.Schema({
    Telefono: {
        type: String,
        required: true
    },
    Nombre: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Ubiacion: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('UsersTraders', UserTraderSchema);