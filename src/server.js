require('dotenv').config({path:'variaveis.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require("./routes");

const server = express();
server.use(cors());
server.use(body-bodyParser.urlencoded({extended:false}));
server.use('/api',routes);

server.listen(process.env.PORT,()=>{
    console.log(`Servidor rodado em: http://localhost: ${process.env.PORT}`);

})

