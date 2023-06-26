require("dotenv").config()
const express = require("express")
const app = express()
const rutaUsuario = require("./routes/usuarios")
const rutaProducto = require("./routes/productos")
const rutaEmpleado = require("./routes/empleados")
const rutaEmpresa = require("./routes/empresas")


//9 Middleware
app.use(express.json())
app.use("/usuarios", rutaUsuario)
app.use("/productos", rutaProducto)
app.use("/empleados", rutaEmpleado)
app.use("/empresa", rutaEmpresa)




//6
app.listen(process.env.PORT, ()=>{
    console.log("Servidor iniciado desde el puerto 8080")
})