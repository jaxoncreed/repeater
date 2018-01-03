var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function(req, res) {
  console.log('Get sent');
  res.send('connected');
});

app.post('/', function(req, res) {
  console.log('Post sent');
  console.log(req.body);
  res.send(req.body);
});

var port = 3000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});

