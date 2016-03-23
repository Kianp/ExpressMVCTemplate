var mongoose = require('mongoose');
var dbConfig = require('./Conf.js').database ;
var db = null ;

var init = function () {
    mongoose.connect("mongodb://" + dbConfig.host + "/" + dbConfig.dbName) ;
    db = mongoose.connection ;
    db.on('error' , console.error.bind(console ,  "DB Connection Error")) ;
    db.once('open' , function () {
        console.log('Mongodb Connected') ;
    }) ;
} ;

module.exports = {
    init : init ,
    db : db
} ;


