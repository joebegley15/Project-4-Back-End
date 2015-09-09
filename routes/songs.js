'use strict';

var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songs')

router.route('/')
  .get(songsController.index)
  .post(songsController.create);

router.route('/:id')
  .get(songsController.show)
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
