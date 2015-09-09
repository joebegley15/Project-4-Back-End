//Express configuration
var express = require('express'),
    http = require('http'),
    bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use('/songs', require('./routes/songs'));
app.use('/albums', require('./routes/albums'));
app.use('/lists', require('./routes/rankedLists'));

// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500).json({
//       'error': {
//         message: err.message,
//         error: err.stack
//       }
//     });
//   });
// }

// app.use(function(err, req, res, next) {
//   res.status(err.status || 500).json({
//     'error': {
//       message: err.message,
//       error: {}
//     }
//   });
// });

//SERVER INFO
var port = 8000;
var server = http.createServer(app);
server.listen(port, function(){
  console.log("Server is running on port " + port + " YEEEEEEE");
});
