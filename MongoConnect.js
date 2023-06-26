const mongoose = require("mongoose")

const MongoConnect = ()=>{
    mongoose.connect("mongodb://127.0.0.1:55555")
    .then(()=>{console.log("Conexion a BD exitosa")})
    .catch((error)=>{console.log("Error: " + error)})
}

module.exports = MongoConnect