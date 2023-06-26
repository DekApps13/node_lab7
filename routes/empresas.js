const express = require("express")
const router = express.Router()
const MongoConnect = require("../MongoConnect")
const empresaModel = require("../models/empresaModel")
const jwt = require("jsonwebtoken")

MongoConnect()

router.post("/create", async (req, res)=> {
    try{
        const {nombre, llave} = req.body
        const empresa = new empresaModel({nombre, llave})
        await empresa.save()
        return res.status(200).json(empresa)
    }catch(error){
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

router.post("/validate", async (req, res)=> {
    try{
        const {llave} = req.body
        const empresa = await empresaModel.find({llave})
        if (empresa.length == 0)
            return res.status(404).json({status:"Llave no encontrada"})

        jwt.sign({empresa}, process.env.LOCALKEY, (error, token)=>{
            if (error)
                return res.status(500).json({status:"Token no generado"})
            return res.json(token)
        })

        
    }catch(error){
        console.log(error)
        return res.status(500).json({status:"Error en la base de datos"})
    }
})

module.exports = router
