'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-crud');

var Song = require('./models/song.js');

var done = function() {
  mongoose.connection.close();
};

var command = process.argv[2];

var create = function(title, artist_id, artist, album_id, album, rating, review) {
  Song.create({
    'song.title': title,
    'song.artist_id': artist_id,
    'song.artist': artist,
    'song.album_id': album_id,
    'song.album': album,
    'song.rating': rating,
    'song.review': review
  }, function(err, song) {
    setTimeout(done, 0);
    if (err) {
      console.error(err);
      return;
    }
  });
};

var list = function() {
  Song.find().exec(function(err, songs) {
    setTimeout(done, 0);
    if (err) {
      console.error(err);
      return;
    }
    songs.forEach(function(song) {
      console.log(song.toObject());
    });
  });
};

var read = function(field, criterion) {
  var search = {};
  if (criterion[0] === '/') {
    search[field] = new RegExp(criterion.slice(1, criterion.length-1));
  } else {
    search[field] = criterion;
  }
  Song.find(search).exec(function(err, songs) {
    setTimeout(done, 0);
    if (err) {
      console.error(err);
      return;
    }
    songs.forEach(function(person) {
      console.log(person.toObject());
    });
  });
};

var deleteId = function(id) {
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

// if (command === 'c') {
//   var first = process.argv[3];
//   var last = process.argv[4];
//   var dob = process.argv[5];

//   if (!dob) {
//     console.log("usage: c <first> <last> <dob>");
//     done();
//   } else {
//     create(first, last, dob);
//   }
// } else if (command === 'r') {
//   var field = process.argv[3];
//   var criterion = process.argv[4];

//   if (!criterion) {
//     console.log("usage: r <field> <criterion>");
//     done();
//   } else {
//     read(field, criterion);
//   }
// } else if (command === 'd') {
//   var id = process.argv[3];

//   if (!id) {
//     console.log("usage: d <object id>");
//     done();
//   } else {
//     deleteId(id);
//   }

// } else {
//   list();
// }
