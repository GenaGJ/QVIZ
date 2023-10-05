'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      this.belongsTo(Theme, {foreignKey: 'theme_id'})
    }
  }
  Question.init({
    title: {
      type: DataTypes.TEXT,
    },
    theme_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    answer: {
      type: DataTypes.TEXT,
    }
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};