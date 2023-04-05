const Order = require('../models/order.model')
const Product = require('../models/product.model');
const OrderDetail = require('../models/order.detail');
const sequelize = require('../configs/db')

exports.create = async (req, res) => {
    const user = req.payload.id;
    const item = req.body.item;

    // try {
    await Order.create({ user: user }).then((data) => {
        if (data) {
            item.map((e) => {
                OrderDetail.create({
                    order: data.id,
                    product: e.product,
                    qauntity: e.qauntity
                })
                // });
                // for (let i = 0; i < item.length; i++){
                //     OrderDetail.create({
                //         order: data.id,
                //         product: item[i].product,
                //         qauntity:item[i].qauntity
                //     })
            })
            return res.status(200).json({ result: 'Order success' })
        }
        return res.status(400).json({ result: 'Order failed' })

    })
    // res.status(201).json(order)
    // } catch (error) {
    //     return res.status(500).json(error)
    // }
}
exports.select = async (req, res) => {
    try {
        res.status(201).json({ message: "select order product" })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.selectById = async (req, res) => {
    try {
        res.status(201).json({ message: "selectById order product" })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.update = async (req, res) => {
    try {
        res.status(201).json({ message: "update order product" })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.delete = async (req, res) => {
    try {
        res.status(201).json({ message: "delete order product" })
    } catch (error) {
        return res.status(500).json(error)
    }
}