var express = require('express');
var app = express();
var router = express.Router();

var path = __dirname + '/views/';

app.use('/', router);

router.get('/', function(req, res) {
	res.sendFile(path + 'index.html');
});

//Do I have to define a route for every page?  There's gotta be an easier way, right?
router.get('/product', function(req, res) {
	res.sendFile(path + 'product.html');
});

router.get('/about', function(req, res) {
	res.sendFile(path + 'about.html');
});

router.get('/bs-tutorial01', function(req, res) {
	res.sendFile(path + 'bs-tutorial01.html');
});

router.get('/bs-tutorial02', function(req, res) {
	res.sendFile(path + 'bs-tutorial02.html');
});

router.get('/bs-tutorial03', function(req, res) {
	res.sendFile(path + 'bs-tutorial03.html');
});

app.use('*', function(req, res) {
	res.send('Error 404: Not found!');
});


app.listen(3000, function () {
	console.log('Dave rules app listening hard on port 3000');
});