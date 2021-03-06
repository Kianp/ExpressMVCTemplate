/**
 * Created by Kian on 3/18/16.
 */


var express = require('express');
var http = require('http');
var path = require('path');
var handlebars  = require('express-handlebars'), hbs;
var app = express();
var Conf = require('./Conf/Conf') ;
var Database = require('./Conf/MongoDB') ;

Database.init() ; 

app.set('port', Conf.network.port );
app.set('views', path.join(__dirname, 'views'));

/* express-handlebars - https://github.com/ericf/express-handlebars
 A Handlebars view engine for Express. */
hbs = handlebars.create({
    defaultLayout: 'main'
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')));

/*
Using Defined Routes
 */
require('./routes/Routes')(app);


http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
