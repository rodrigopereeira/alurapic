module.exports = function(app) {

    var api = app.api.foto;

    // passa a função api.lista como parâmetro
    app.route('/v1/fotos')
        .get(api.lista)
        .post(api.adiciona);

    //mesma url com protocolos diferentes
    app.route('/v1/fotos/:id')
        .get(api.buscaPorId)
        .delete(api.removePorId)
        .put(api.atualiza);

};
