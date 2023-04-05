const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')

const Order = sequelize.define("order", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    user: {
        type: DataTypes.UUID,
        allowNull: false,
    }
},
    {
        sequelize,
        timestamps: true
    })

module.exports = Order