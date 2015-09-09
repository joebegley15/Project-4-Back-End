var mongoose = require('mongoose');

var rankedListSchema = new mongoose.Schema({
  title: String,
  description: String,
  list: Array,
  author: String
});

var RankedListSchema = mongoose.model('RankedListSchema', rankedListSchema);

module.exports = RankedListSchema;
