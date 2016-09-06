var api = {}; // objeto

// adiciona dinamicamente a propriedade `lista` associando uma função
api.lista = function(req, res) {

    // lógica aqui
    var fotos = [{
        _id: 1,
        titulo: 'Leão',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    }, {
        _id: 2,
        titulo: 'Leão 2',
        url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
    }];

    res.json(fotos);
};

module.exports = api;
