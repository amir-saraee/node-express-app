const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Course = require('./Course')

const CourseVideo = sequelize.define('CourseVideo', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isPaid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CourseVideo.belongsTo(Course, { foreignKey: 'courseId' }); // Define the many-to-one relationship

module.exports = CourseVideo;
