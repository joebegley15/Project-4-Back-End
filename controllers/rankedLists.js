'use strict';

var models = require('../models/index');
var RankedList = models.RankedList;

module.exports = (function () {

  var create = function(req, res, next) {
    console.log(req.body);
    RankedList.create(req.body, function(err, rankedList) {
      if (err){
        console.log(err);
        next(err);
      }
      res.json(rankedList);
    });
  };

  var index = function(req, res, next) {
    RankedList.find()
      .then(function success (rankedLists) {
        res.json(rankedLists);
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
    RankedList.findById(req.params.id, function (err, rankedList){
      if (err) {
        console.error(err);
        return next(err);
      }
      if (! rankedList) {
        return next(notFound());
      }
      res.json(rankedList);
    });
  };

  var update = function(req, res, next) {
    RankedList.findById(req.params.id, function(err, rankedList) {
      if (err) {
        return next(err);
      }
      if (! rankedList) {
        return next(notFound());
      }
      console.log(req.body);

      rankedList.title = req.body.title;
      rankedList.description = req.body.description;
      rankedList.list = req.body.list;
      rankedList.author = req.body.author;

      rankedList.save(function(err) {
        if (err) {
          return next(err);
        }
        res.sendStatus(204);
      });
    });
  }

  var deleteById = function(req, res, next) {
    RankedList.findById(req.params.id, function(err, rankedList) {
      if (err) {
        return next(err);
      }
      if (! rankedList) {
        return next(notFound());
      }
      rankedList.remove(function(err) {
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
