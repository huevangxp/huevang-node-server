const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')

const ProductImage = sequelize.define('product_image', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey:true
    },
    product: {
        type: DataTypes.UUID,
        allowNull:false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    }
}, {
    sequelize,
timestamps:true
})

module.exports = ProductImage