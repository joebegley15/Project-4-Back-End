'use strict';

var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.route('/')
  .get(function(req, res) {
    //Songs index
    models.Song.find({})
      .then(function(songs) {
          res.json(songs);
        },
        function(err) {
          console.log(err);
        });
  })
  .post(function(req, res) {
    // Create a new song review
    models.Product.create(req.body)
      .then(function(songs) {
          res.json(songs);
          console.log('Song review created');
        },
        function(error) {
          console.log(error);
          console.log('Failed to create a song review');
        });
  });

router.route('/:id')
  // Show by ID request
  .all(function(req, res, next) {
    models.Song.findById(req.params.id)
      .then(function(song) {
          res.locals.song = song;
          next();
        },
        function(error) {
          next(error);
          console.log('Error');
        });
  })
  .get(function(req, res) {
    // Sends the get request for the song review
    models.Song.findByID(req.params.id)
      .then(function(songs) {
          res.json(songs);
        },
        function(error) {
          console.log(error);
        });
  })
  .patch(function(req, res) {
    //updates the product
    res.locals.product.update(req.body)
      .then(function(song) {
          res.json(song);
        },
        function(error) {
          res.sendStatus(500);
          console.log('error in updating the song review');
        });
  })
  .delete(function(res, req) {
    //delete song route
    res.sendStatus(404);
    console.log('error in deleting the song');
  })
  .all(function(error, req, res, next) {
    res.sendStatus(404);
  });

module.exports = router;
