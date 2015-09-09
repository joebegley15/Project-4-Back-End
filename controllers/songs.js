'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-crud');
var Song = require('../models/song.js');

module.exports = (function () {

  var done = function() {
    mongoose.connection.close();
  };

  var create = function(req, res, next) {
    console.log(req.body);
    Song.create(req.body, function(err, song) {
      if (err){
        console.log(err);
        next(err);
      }
      res.json(song);
    });
  };

  var index = function(req, res, next) {
    Song.find()
      .then(function success (songs) {
        res.json(songs);
    }, function error (err) {
      next(err);
    });
  };

  var show = function(req, res) {
    Song.findById(id, function (err, song){
      if (err) {
        console.error(err);
      }
      console.log(song);
      res.json(song);
    });
  };

  var deleteById = function(id) {
    Song.findById(id, function(err, song) {
      if (err) {
        setTimeout(done, 0);
        console.error(err);
        return;
      }
      song.remove(function(err) {
        setTimeout(done, 0);
        if (err) {
          console.error(err);
        }
      });
    });
  };

  return {
    create: create,
    index: index,
    show: show,
    deleteById: deleteById
  }
})();
