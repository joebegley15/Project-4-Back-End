'use strict';

var express = require('express');
var router = express.Router();
var songsController = require('../controllers/songs');

router.route('/')
  .get(songsController.index)
  .post(songsController.create);

router.route('/:id')
  .get(songsController.show)
  .patch(songsController.update)
  .delete(songsController.deleteById)
  .all(function(error, req, res, next) {
    res.sendStatus(404);
  });

module.exports = router;
