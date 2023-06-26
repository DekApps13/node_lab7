const express = require("express")
const router = express.Router()
var {productos} = require("../models/productos")
const valida_producto = require("../middleware/valida_producto")

router.get("/", (req, res)=>{
    return res.status(200).json(productos)
})

router.get("/:id_producto", (req, res)=>{
    const id_producto = req.params.id_producto
    const filtro = productos.filter((producto)=>producto.id_producto == id_producto)
    if(filtro.length>0)
        return res.status(201).json(filtro)
    else
        return res.status(404).json({status:"Producto no encontrado"})
})

router.post("/",valida_producto, (req, res)=>{
    var elemento = req.body
    elemento.id_producto = productos.length+1
    productos.push(elemento)
    return res.status(201).json(elemento)
})

router.put("/:id_producto", (req, res)=>{
    const id_producto = req.params.id_producto
    var body = req.body
    const filtro = productos.filter((producto)=> producto.id_producto == id_producto)
    if(filtro.length>0){
        productos = productos.filter((producto)=> producto.id_producto != id_producto)
        body.id_producto = id_producto
        productos.push(body)
        return res.status(201).json(body)
    }else
        return res.status(404).json({status:"Producto no encontrado"})
})

router.delete("/:id_producto", (req, res)=>{
    const id_producto = req.params.id_producto
    const filtro = productos.filter((producto)=> producto.id_producto == id_producto)
    if (filtro.length>0){
        productos = productos.filter((producto)=> producto.id_producto != id_producto)
        return res.status(201).json(filtro)
    }else
        return res.status(404).json({status:"Producto no encontrado"})
})

router.get("/bymarca/:marca", (req, res)=>{
    const marca = req.params.marca
    const filtro = productos.filter((producto)=> producto.marca == marca)
    if (filtro.length>0)
        return res.status(200).json(filtro)
    else
        return res.status(404).json({status:"Sin productos de esta marca"})
})

router.get("/min_price/:min_price", (req, res)=>{
    const min_price = req.params.min_price
    const filtro = productos.filter((producto)=> producto.precio >= min_price)
    if(filtro.length>0)
        return res.json(filtro)
    else
        return res.status(404).json({status:"Sin productos por arriba de este precio"})
})

router.get("/max_price/:max_price", (req, res)=>{
    const max_price = req.params.max_price
    const filtro = productos.filter((producto)=> producto.precio <= max_price)
    if (filtro.length>0)
        return res.json(filtro)
    else
        return res.status(404).json({status:"Sin productos por debajo de este precio"})
})

module.exports = router
