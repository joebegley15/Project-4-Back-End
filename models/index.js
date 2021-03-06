'use strict';

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://joe:MongoLabPass@ds039073.mongolab.com:39073/musicreviewshell');

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
