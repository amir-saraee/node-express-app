const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Lecture extends Model {}

Lecture.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    career: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Lecture',
  }
);

module.exports = Lecture;
