const mongoose = require("mongoose")

require("dotenv").config({path: "variable.env"});

const conectionDb = async () =>{
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log("BD true")
    } catch (error) {
        console.log(error)
        process.exit(1); //detenemos app
    }
}

module.exports = conectionDb