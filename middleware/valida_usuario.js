const valida_usuario = (req, res, next)=>{
    const {nombre, apellido, edad, salario} = req.body
    if (nombre=="")
        return res.status(400).json({status: "Escriba el Nombre del usuario"})
    if (apellido=="")
        return res.status(400).json({status: "Escriba el Apellido del usuario"})
    if (edad=="")
        return res.status(400).json({status: "Escriba la Edad del usuario"})
    if (salario=="")
        return res.status(400).json({status: "Escriba el Salario del usuario"})


    next()
}

module.exports = valida_usuario
