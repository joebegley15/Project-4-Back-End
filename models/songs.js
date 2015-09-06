'use strict';

module.exports = function(sequelize, DataTypes) {
  var Song = sequelize.define('Song', {
    id : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true
    },
    title: {
      type : DataTypes.STRING,
      allowNull : false
    },
    // This may be a problem until we can fill it with an actual artist.
    artist_id : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    // See artist_id
    album_id : {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    rating: {
      type : DataTypes.STRING,
      allowNull : false
    }
  }, {
    timestamps : true
  });

  return Song;
};
