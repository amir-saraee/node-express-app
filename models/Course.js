const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Lecture = require('./Lecture')
const CourseVideo = require('./CourseVideo')

const Course = sequelize.define('Course', {
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
});

Course.belongsTo(Lecture, { foreignKey: 'lecturerId' }); // Define the many-to-one relationship
Course.hasMany(CourseVideo, { foreignKey: 'courseId' }); // Define the one-to-many relationship

module.exports = Course;
