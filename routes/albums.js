'use strict';

var express = require('express');
var router = express.Router();
var albumsController = require('../controllers/albums');

router.route('/')
  .get(albumsController.index)
  .post(albumsController.create);

router.route('/:id')
  .get(albumsController.show)
  .patch(albumsController.update)
  .delete(albumsController.deleteById)
  .all(function(error, req, res, next) {
    res.sendStatus(404);
  });

module.exports = router;

