var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  title: String,
  artist_id: String,
  artist: String,
  album_id: String,
  album: String,
  rating: String,
  review: String,
  image: String
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
