var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
  title : {
    type : DataTypes.STRING,
    allowNull : false
  },
  // This may be a problem until we can fill it with an actual artist.
  artist_id : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  artist : {
    type : DataTypes.STRING,
    allowNull : false
  }
  // See artist_id
  album_id : {
    type : DataTypes.INTEGER,
    allowNull : false
  },
  album : {
    type : DataTypes.INTEGER,
    allowNull : false,
  },
  rating : {
    type : DataTypes.STRING,
    allowNull : false
  },
  review : {
    type : DataTypes.STRING,
    allowNull : false
  } {
  timestamps : true
  }
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;
