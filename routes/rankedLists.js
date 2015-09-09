'use strict';

var express = require('express');
var router = express.Router();
var rankedListsController = require('../controllers/rankedLists');

router.route('/')
  .get(rankedListsController.index)
  .post(rankedListsController.create);

router.route('/:id')
  .get(rankedListsController.show)
  .patch(rankedListsController.update)
  .delete(rankedListsController.deleteById)
  .all(function(error, req, res, next) {
    res.sendStatus(404);
  });

module.exports = router;
