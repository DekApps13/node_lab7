const valida_producto = (req, res, next)=>{
    const {descripcion, marca, precio} = req.body
    if (descripcion=="")
        return res.status(400).json({status: "Ingrese la Descripción del producto"})
    if (marca=="")
        return res.status(400).json({status: "Ingrese la Marca del producto"})
    if (precio=="")
        return res.status(400).json({status: "Ingrese el Precio del producto"})

    next()
}


module.exports = valida_producto
