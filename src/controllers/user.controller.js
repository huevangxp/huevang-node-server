const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.create = async (req, res) => {
    try {
        const { name, password } = req.body
        const newPass = await bcrypt.hash(password, 10)
        const createUser = {
            name: name,
            password:newPass
        }
       await User.create(createUser)
        res.status(201).json(createUser)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.select = async (req, res) => {
    try {
        const user = await User.findAll()
        if (!user) {
            return res.status(404).json({message:'no user'})
        }
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.selectById = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({message:"this user not found"})
        }
        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.update = async (req, res) => {
    const {id} = req.params
    try {
        const { name, password } = req.body
        const newPass = await bcrypt.hash(password, 10)
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ message: "this user not found..." })
        }
        const data = {
            name: name,
            password:newPass
        }
        await user.update(data)
        res.status(200).json({message:"update user success..."})
    } catch (error) {
        return res.status(500).json(error)
    }
}
exports.delete = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({message:'user not found...'})
        }
        await user.destroy()
        res.status(200).json({message:"delete success..."})
    } catch (error) {
        return res.status(500).json(error)
    }
}