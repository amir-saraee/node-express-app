const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Article = require('./Article')

class Category extends Model {}

Category.init(
  {
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    isSelectable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Category',
  }
);



module.exports = Category;
