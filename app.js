//Express configuration
var express = require('express'),
    http = require('http'),
    bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

// app.use('/', require('./routes/index'));
app.use('/songs', require('./routes/songs'));


app.use(function(err,req,res,next){
  res.sendStatus(500);
});
//SERVER INFO
var port = 8000;
var server = http.createServer(app);
server.listen(port, function(){
  console.log("Server is running on port " + port + " YEEEEEEE");
});
