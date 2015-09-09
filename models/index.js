'use strict';

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI);

var models = models || {};

models.mongoose = mongoose;

models.Song = require('./song')(mongoose, models);

Object.keys(models).forEach(function(modelName) {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

module.exports = models;
