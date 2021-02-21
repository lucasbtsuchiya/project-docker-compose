const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;
const bodyParser = require('body-parser');
const cors = require('cors'); //Acesso do backend por meio do frontEnd

//Conexão com mongoDB 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb');

//Middlewares
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(cors());

//ODM Mapeamento objeto documento.
const Client = restful.model('Client', {
    name: {type: String, required: true}
})

//Rest API
Client.methods(['get', 'post', 'put', 'delete'])
Client.updateOptions({new: true, runValidators: true});

//Routes
Client.register(server, '/clients');

//Teste
//server.get('/', (req, res, next) => res.send('BackEnd'));

//Start o servidor na porta 3000
server.listen(3000)