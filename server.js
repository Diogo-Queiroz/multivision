var express = require('express'),
	stylus = require('stylus'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path){
	return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
	{
		src: __dirname + "/public",
		compile: compile
	}
));
app.use(express.static(__dirname + "/public"));

if (env === 'development'){
	mongoose.connect('mongodb://localhost/multivision');
} else {
	mongoose.connect('mongodb://diogo-admin:multivision@ds033116.mlab.com:33116/plural-multivision')
}
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
	console.log('multivision db opened!');
});

app.get('/partials/:partialPath', function(req, res){
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function (req, res) {
    res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log('Listening on port ' + port + "...");