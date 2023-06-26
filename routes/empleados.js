const express = require("express")
const router = express.Router()
var {empleados} = require("../models/empleados")
const valida_empleado = require("../middleware/valida_empleado")

router.get("/", (req, res)=>{
    return res.status(200).json(empleados)
})

router.get("/:id_empleado", (req, res)=>{
    const id_empleado = req.params.id_empleado
    const filtro = empleados.filter((emp)=> emp.id_empleado == id_empleado)
    if(filtro.length > 0)
        return res.status(200).json(filtro)
    else
        return res.status(404).json({status:"Empleado no encontrado"})
})

router.post("/", valida_empleado.post, (req, res)=>{
    var body = req.body
    body.id_empleado = empleados.length+1
    empleados.push(body)
    return res.status(201).json(body)
})

router.put("/:id_empleado",valida_empleado.put, (req, res)=>{
    const id_empleado = req.params.id_empleado
    var body = req.body
    const filtro = empleados.filter((emp)=> emp.id_empleado == id_empleado)
    if(filtro.length > 0){
        empleados = empleados.filter((emp)=> emp.id_empleado != id_empleado)
        body.id_empleado = id_empleado
        empleados.push(body)
        return res.status(201).json(body)
    }else
        return res.status(404).json({status:"No encontrado"})
})

router.delete("/:id_empleado", (req, res)=>{
    const id_empleado = req.params.id_empleado
    const filtro = empleados.filter((emp)=> emp.id_empleado == id_empleado)
    if (filtro.length > 0){
        empleados = empleados.filter((emp)=> emp.id_empleado != id_empleado)
        return res.status(200).json(filtro)
    }else
        return res.status(404).json({status:"Empleado no encontrado"})
})

module.exports = router
