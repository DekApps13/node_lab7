const mongoose = require("mongoose")

const empresaSchema = mongoose.Schema({
    nombre: String,
    llave: String
})

const empresaModel = mongoose.model("empresa", empresaSchema)

module.exports = empresaModel