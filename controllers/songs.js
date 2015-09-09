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

  var notFound = function(){
    var error = new Error("Not Found");
    error.status = 404;
    return error;
  }

  var show = function(req, res, next) {
    Song.findById(req.params.id, function (err, song){
      if (err) {
        console.error(err);
        return next(err);
      }
      if (! song) {
        return next(notFound());
      }
      res.json(song);
    });
  };

  var update = function(req, res, next) {
    Song.findById(req.params.id, function(err, song) {
      if (err) {
        return next(err);
      }
      if (! song) {
        return next(notFound());
      }
      console.log(req.body);

      song.title = req.body.title;
      song.artist_id = req.body.artist_id;
      song.artist = req.body.artist;
      song.album_id = req.body.album_id;
      song.album = req.body.album;
      song.rating = req.body.rating;
      song.review = req.body.review;

      song.save(function(err) {
        if (err) {
          return next(err);
        }
        res.sendStatus(204);
      });
    });
  }

  var deleteById = function(req, res, next) {
    Song.findById(req.params.id, function(err, song) {
      if (err) {
        return next(err);
      }
      if (! song) {
        return next(notFound());
      }
      song.remove(function(err) {
        if (err) {
          return next(err);
        }
        res.sendStatus(204);
      });
    });
  };

  return {
    create: create,
    index: index,
    show: show,
    deleteById: deleteById,
    update: update
  }
})();
