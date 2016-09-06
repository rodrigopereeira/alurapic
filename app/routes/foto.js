module.exports = function(app) {

    var api = app.api.foto;

    // passa a função api.lista como parâmetro
    app.get('/v1/fotos', api.lista);

};
