'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Membership extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Membership.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'cascade'
      })
      Membership.belongsTo(models.Group, {
        foreignKey: 'groupId',
        onDelete: 'cascade'
      })
    }
  }
  Membership.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'member', 'co-host', 'organizer')
    }
  }, {
    sequelize,
    modelName: 'Membership',
  });
  return Membership;
};
