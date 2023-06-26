const mongoose = require("mongoose")

const mongooseSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    salario: Number
})

const UsuarioModel = mongoose.model("usuario", mongooseSchema)

module.exports = UsuarioModel