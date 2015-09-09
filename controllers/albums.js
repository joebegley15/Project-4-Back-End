'use strict';

var models = require('../models/index');
var Album = models.Album;

module.exports = (function () {

  var create = function(req, res, next) {
    console.log(req.body);
    Album.create(req.body, function(err, album) {
      if (err){
        console.log(err);
        next(err);
      }
      res.json(album);
    });
  };

  var index = function(req, res, next) {
    Album.find()
      .then(function success (albums) {
        res.json(albums);
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
    Album.findById(req.params.id, function (err, album){
      if (err) {
        console.error(err);
        return next(err);
      }
      if (! album) {
        return next(notFound());
      }
      res.json(album);
    });
  };

  var update = function(req, res, next) {
    Album.findById(req.params.id, function(err, album) {
      if (err) {
        return next(err);
      }
      if (! album) {
        return next(notFound());
      }
      console.log(req.body);

      album.title = req.body.title;
      album.artist_id = req.body.artist_id;
      album.artist = req.body.artist;
      album.rating = req.body.rating;
      album.review = req.body.review;

      album.save(function(err) {
        if (err) {
          return next(err);
        }
        res.sendStatus(204);
      });
    });
  }

  var deleteById = function(req, res, next) {
    Album.findById(req.params.id, function(err, album) {
      if (err) {
        return next(err);
      }
      if (! album) {
        return next(notFound());
      }
      album.remove(function(err) {
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
