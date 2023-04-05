const Product = require('../models/product.model')
const sequelize = require('../configs/db')
const {QueryTypes} = require('sequelize')
const Catgory = require('../models/Category.model')
const ProductImage = require('../models/product.image.model')


exports.createProductImage = async (req, res) => {
    const info = req.body
    try {
        await ProductImage.create(info)
            .then((data) => {
                res.status(201).json(data)
            }).catch((error) => {
                console.log(error);
                res.status(404).json({ message: "create gategory error...!" })
            })
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.create = async (req, res) => {
    const info = req.body
    try {
        await Product.create(info)
            .then((data) => {
                res.status(201).json(data)
            }).catch((error) => {
                console.log(error);
                res.status(404).json({ message: "create gategory error...!" })
            })
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.select = async (req, res) => {

    try {
        
        await sequelize.query(`SELECT pr.id, pr.name, ca.name, pr.description, pr.qauntity,
         pr.price, pr.createdAt, pr.updatedAt FROM products pr INNER JOIN catgories ca ON pr.category = ca.id`,
            { type: sequelize.QueryTypes.SELECT }).then(async (data) => {
                let datas = [];
                for (let i = 0; i < data.length; i++){
                    const images = await sequelize.query(`SELECT  imageUrl FROM product_images  WHERE product = '${data[i].id}'`,
                        { type: sequelize.QueryTypes.SELECT });
                    data[i] = { ...data[i], images }
                      datas = [...datas, data[i]]
                }
                // data.forEach(async(item, i) => {
                //     const images = await sequelize.query(`SELECT  imageUrl FROM product_images  WHERE product = '${item.id}'`,
                //         { type: QueryTypes.SELECT })
                //     data[i] = {...data[i], images}
                //      datas = [...datas, data[i]]
                //  })
                return res.status(200).json(datas)
             }).catch((error) => {
                 throw new Error(error)
            })
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}
exports.selectById = async (req, res) => {
    const {id} = req.params
    try {
        const data = await Product.findByPk(id)
        if (!data) {
            return res.status(404).json({message:"select product error"})
        }
        res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.update = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findByPk(id)
        if (!product) {
            return res.status(404).json({ message: "not found product id" })
        }
         await product.update(req.body)
        res.status(201).json({message:"update category successfully..."})

    } catch (error) {
        res.status(500).json(error)
    }
}
exports.delete = async (req, res) => {
    const {id} = req.params
    try {
        const data = await Product.findByPk(id)
        if (!data) {
            return res.status(404).json({message:"this product not found..."})
        }
        await data.destroy()
        res.status(200).json({message:'delete this item successfuly...'})
    } catch (error) {
        return res.status(500).json(error)
    }
}