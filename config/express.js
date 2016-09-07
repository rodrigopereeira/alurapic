var express = require("express");
var consign = require('consign');

var app = express();

app.use(express.static('./public'));



//inserindo modulos de api e rotas pelo consign e passando o servidor como parametro
consign({
        cwd: 'app'
    })
    .include('api')
    .then('routes')
    .into(app);

//criando modulo para acesso externo
module.exports = app;
