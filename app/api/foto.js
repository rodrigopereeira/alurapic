var api = {}; // objeto
var CONTADOR = 2;
var fotos = [{
    _id: 1,
    titulo: 'Leão',
    url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
}, {
    _id: 2,
    titulo: 'Leão 2',
    url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
}];

api.adiciona = function(req, res) {

    var foto = req.body;
    foto._id = ++CONTADOR;
    fotos.push(foto);
    res.json(foto);
};

api.atualiza = function(req, res) {

    var fotoId = req.params.id;
    var foto = req.body;

    var indice = fotos.findIndex(function(foto) {
        return foto._id == fotoId;
    });

    fotos[indice] = foto;
    res.sendStatus(200);

};
// adiciona dinamicamente a propriedade `lista` associando uma função
api.lista = function(req, res) {
    res.json(fotos);
};

api.buscaPorId = function(req, res) {
    var foto = fotos.find(function(foto) {
        return foto._id == req.params.id;
    })

    res.json(foto);
};

api.removePorId = function(req, res) {

    fotos = fotos.filter(function(foto) {
        return foto._id != req.params.id;
    });

    //envia status que realizou com sucesso mas sem retorno de json
    res.sendStatus(204);
};

module.exports = api;
