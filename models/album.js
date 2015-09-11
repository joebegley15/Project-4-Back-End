var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
  title: String,
  artist_id: String,
  artist: String,
  rating: String,
  review: String,
  image: String
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;
