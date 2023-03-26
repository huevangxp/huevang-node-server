const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
}, {
    sequelize,
    timestamps:true
})

module.exports = User