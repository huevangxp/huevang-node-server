const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const Catgory = sequelize.define('Catgory', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {
    sequelize,
    timestamps:true
  });
  
  module.exports = Catgory;