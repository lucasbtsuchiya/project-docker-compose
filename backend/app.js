const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose

//Conexão com mongoDB 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

//Teste
server.get('/', (req, res, next) => res.send('BackEnd'));

//Start o servidor na porta 3000
server.listen(3000)