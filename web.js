var express = require('express');

var app = express.createServer(express.logger());

var k = fs.readFileSync('index.html');
var buf = new Buffer(k);


app.get('/', function(request, response) {
  response.send(k.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
