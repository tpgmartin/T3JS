var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'jade');

app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));

app.get('/', function (req, res) {
    res.render('index');
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});