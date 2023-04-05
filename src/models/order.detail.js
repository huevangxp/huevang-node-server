const { DataTypes } = require('sequelize')
const sequelize = require('../configs/db')

const OrderDetail = sequelize.define("order_detail", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    order: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    product: {
        type: DataTypes.UUID,
        allowNull:false
  },
  qauntity: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
//   amount: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//   }
},
    {
        sequelize,
        timestamps: true
    })

module.exports = OrderDetail