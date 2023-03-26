const Category = require('../models/Category.model')

exports.createCategory = async (req, res) => {
    try {
        const category = req.body
        if (category.name === '') return res.status(404).json({ message: 'create category error' })
        await Category.create(category)
            .then((data) => {
                res.status(201).json(data)
            }).catch((error) => {
                console.log(error);
                res.status(404).json({ message: "create gategory error...!" })
            })
    } catch (error) {
        return res.status(500).json({ message: 'server error...' })
    }
}

exports.selectCategory = async (req, res) => {
    try {
        const data = await Category.findAll()
        // const data1 = data.filter((e)=>e.name == 'huevang')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.selectCategoryById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Category.findByPk(id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.deleteCategory = async (req, res) => {
    const { id } = req.params
    try {
        const cate_id = await Category.findByPk(id)
        if (!cate_id) {
            res.status(404).json({ message: 'gategary not found...' })
        }
        await cate_id.destroy()
        res.status(201).json({ message: "delete successfully..." })
    } catch (error) {
        res.status(500).json(error)
    }
}

exports.updateCategory = async (req, res) => {
    const { id } = req.params
    try {
        const category = await Category.findByPk(id)
        if (!category) {
            return res.status(404).json({ message: "not found category id" })
        }
         await category.update(req.body)
        res.status(201).json({message:"update category successfully..."})

    } catch (error) {
        res.status(500).json(error)
    }
}