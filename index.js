var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('Get sent');
  req.send('connected');
});

app.post('/', function(req, res) {
  console.log('Post sent');
  console.log(req.body);
  req.send(req.body);
});

var port = 3000;
app.listen(3000, function() {
  console.log('Listening on port ' + port);
});

