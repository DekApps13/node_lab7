const jwt = require("jsonwebtoken")

const valida_token = (req, res, next)=>{
    const token = req.headers["authorization"].split(" ")[1]
    jwt.verify(token, process.env.LOCALKEY, (error, data)=>{
        if (error)
            return res.status(404).json({status: "Token invalido"})
        next()
    })
}

module.exports = valida_token