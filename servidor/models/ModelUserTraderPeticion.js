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
    Category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('UsersTradersPeticions', UserTraderPeticionSchema);
