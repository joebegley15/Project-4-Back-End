'use strict';

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://heroku_hh76b8zc:57QZha3X2@ds041571.mongolab.com:41571/heroku_hh76b8zc');

var models = models || {};

models.mongoose = mongoose;

models.Song = require('./song');
models.Album = require('./album');
models.RankedList = require('./rankedList');

Object.keys(models).forEach(function(modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = models;
