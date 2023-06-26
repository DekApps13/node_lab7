const express = require("express")
const router = express.Router()
var {usuarios} = require("../models/usuarios")
const MongoConnect = require("../MongoConnect")
const UsuarioModel = require("../models/UsuarioModel")
const valida_usuario = require("../middleware/valida_usuario")
const valida_token = require("../middleware/valida_token")

MongoConnect()

router.get("/",valida_token, async (req, res)=>{
    try{
        const usuarios = await UsuarioModel.find()
        return res.json(usuarios)
    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const {id} = req.params
        const usuarios = await UsuarioModel.findById(id)
        if (!usuarios)
            return res.status(404).json({status:"No se encuentra el ID"})
        return res.json(usuarios)
    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

router.post("/",valida_usuario, async(req, res)=>{
    try{
        const {nombre, apellido, edad, salario} = req.body

        const Usuario = new UsuarioModel({nombre, apellido, edad, salario})
        await Usuario.save()
        return res.status(201).json(Usuario)


    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

router.put("/:id", async (req, res)=>{
    try{
        const {id} = req.params
        const {nombre, apellido, edad, salario} = req.body
        const usuarios = await UsuarioModel.findByIdAndUpdate(id, {nombre, apellido, edad, salario}, {new:true})
        if (!usuarios)
            return res.status(404).json({status:"No se encuentra el ID"})
        return res.json(usuarios)
    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

router.delete("/:id", async (req, res)=>{
    try{
        const {id} = req.params
        const usuarios = await UsuarioModel.findByIdAndDelete(id)
        if (!usuarios)
            return res.status(404).json({status:"No se encuentra el ID"})
        return res.status(200).json(usuarios)
    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

module.exports = router
