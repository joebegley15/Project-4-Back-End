//Express configuration
var express = require('express'),
    http = require('http');

var app = express();

app.use('/', require('./routes/index'));
app.use('/songs', require('./routes/songs'));

//SERVER INFO
var port = 8000;
var server = http.createServer(app);
server.listen(port, function(){
  console.log("Server is running on port " + port);
});
