const post=(req, res, next)=>{
    const {nombre, salario} = req.body
    if (nombre=="")
        return res.status(400).json({status:"El campo Nombre no debe estar vacio"})
    if (salario=="")
        return res.status(400).json({status:"El campo Salario no debe estar vacio"})
    if (typeof salario == "string")
        return res.status(400).json({status:"El campo Salario debe ser un número"})


    next()
}

const put=(req, res, next)=>{
    const id = req.params.id
    const {nombre, salario} = req.body
    if (id <= 0)
        return res.status(400).json({status:"El ID debe ser mayor a cero"})
    if (nombre=="")
        return res.status(400).json({status:"El campo Nombre no debe estar vacio"})
    if (salario=="")
        return res.status(400).json({status:"El campo Salario no debe estar vacio"})
    if (typeof salario == "string")
        return res.status(400).json({status:"El campo Salario debe ser un número"})



    next()
}



module.exports = {post, put}