// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');

// configuration ===========================================

// config files
var port = process.env.PORT || 3000; // set our port
var db = require('./config/db');

// connect to our mongoDB database (commented out after you enter in your own credentials)
connectionsubject = mongoose.createConnection(db.mongo_buslz);

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);   
console.log('Magic happens on port ' + port);           // shoutout to the user
exports = module.exports = app; 
