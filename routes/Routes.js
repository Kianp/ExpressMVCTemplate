module.exports = function(app){

    // Main Routes

    app.get('/', function(request, response){
        response.render('index') ;
    });

    app.get('/user', function(request, response){
        response.render('user') ;
    });

};
