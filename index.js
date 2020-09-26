const express = require("express");
var servidor = express();

const port = process.env.PORT || 8080;
const ip = "0.0.0.0";

servidor.get("",(req,res)=>{res.send("prueba")});

servidor.listen(port,ip,()=>{console.log(`hola ${port}`)});