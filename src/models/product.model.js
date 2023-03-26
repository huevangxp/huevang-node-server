const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')
const Catgory = require('../models/Category.model')

const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        qauntity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    {
        sequelize,
        timestamps: true
    }
);

Catgory.hasMany(Product, { foreignKey: 'category' })
Product.belongsTo(Catgory, { foreignKey: 'category' })

module.exports = Product;