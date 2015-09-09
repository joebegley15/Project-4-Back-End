var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  title: String,
  artist_id: Number,
  artist: String,
  album_id: Number,
  album: String,
  rating: String,
  review: String
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
