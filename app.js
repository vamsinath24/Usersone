
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var user           = require('./routes/uroutes');
var cors           = require('cors');


var db = require('./config/db');

let port=8085;
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type:'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true })); 

// app.use(methodOverride('X-HTTP-Method-Override')); 
// app.use(express.static(__dirname + '/public')); 
app.use('/users',user);
app.listen(port);	
console.log('Server is running at port:' + port); 

let db_url=db.url;
console.log(db_url);
let mongoDB=process.env.URL||db_url;
mongoose.connect(mongoDB);
mongoose.Promise=global.Promise;
let db2=mongoose.connection;
db2.on('error',console.error.bind(console,'MongoDB connection error:'));
