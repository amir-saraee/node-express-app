const {DataTypes} = require('sequelize')
const sequelize = require('../config/database')

const Lecture = sequelize.define('Lecture',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
    }
})

Lecturer.hasMany(Course, { foreignKey: 'lecturerId' }); // Define the one-to-many relationship

module.exports = Lecture