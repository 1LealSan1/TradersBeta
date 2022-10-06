const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
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
    Ubicacion: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model("UserTraders", UserSchema);