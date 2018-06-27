'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    UserName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Age: DataTypes.INT,
    Gender: DataTypes.STRING,
    City: DataTypes.STRING,
    Country: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};