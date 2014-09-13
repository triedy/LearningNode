var express = require('express');
var app = express();

app.get('/:version/hello.txt', function(req, res) {
    res.send(req.params.version);
    res.send('hello Rob!');
});

var server = app.listen(3000, function() {
    console.log('Listening on part %d', server.address().port)
});
