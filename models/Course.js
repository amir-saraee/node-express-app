const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Lecture = require('./Lecture');
const CourseVideo = require('./CourseVideo');

class Course extends Model {}

Course.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    priceWithOff: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    abstract: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    more: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    publishedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    lastUpdatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    lecturer_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Course',
  }
);

Course.belongsTo(Lecture, { foreignKey: 'lecturer_id', as: 'lectureCourse' }); // Define the many-to-one relationship

module.exports = Course;
