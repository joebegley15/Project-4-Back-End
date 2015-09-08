var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/songs');

var Song = require('./lib/song.js');
