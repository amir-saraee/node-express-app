const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./Category')

class Article extends Model {}

Article.init(
  {
    category_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
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
    visits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Article',
  }
);


// Define the association with Category (many-to-one)
Article.belongsTo(Category, { foreignKey: 'category_id', as: 'categories' });


module.exports = Article;
