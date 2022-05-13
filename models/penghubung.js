'use strict';
const Cars = require('./car')
const Users = require('./user')

module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize
  class Penghubung extends Model { }

  Penghubung.init({
    CarId: {
      type: DataTypes.INTEGER,
      references: {
        model: Cars,
        key: Cars.id
      },
    },
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: Users.id
      }
    }
  }, {
    sequelize
  });

  Penghubung.associate = function (models) {
    Penghubung.belongsTo(models.Car)
    Penghubung.belongsTo(models.User)
  }

  return Penghubung;
};