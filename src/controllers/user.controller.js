const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

exports.create = async (req, res) => {
    // const payload = req.payload;
    // console.log('payload', payload);
    try {
        const { name, password } = req.body
        const newPass = await bcrypt.hash(password, 10)
        const createUser = {
            name: name,
            password: newPass,
            // admin_id:payload.id
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

// exports.login = async (req, res) => {
//     try {
//         const { name, password } = req.body
//         // console.log(name,password);
//         const user = await User.findOne({ where: { name: name } })
//         if (!user) {
//             return res.status(401).json({error:'Invalid username or password'})
//         }

//         isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(401).json({error:'Invalid username or password'})
//         }
//         const token = jwt.sign(
//             {
//                 id: user.id,
//                 name: user.name,
//             }, "mysecretkey", { expiresIn: '24h' })
//         res.status(200).json(token)
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }

exports.login = async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        User.findOne({ where: { name: name } }).then((data) => {
            const validPass = bcrypt.compare(password, data.password);
            if (!validPass) {
                return res.status(401).json({message:"password not match"})
            }
            const token = jwt.sign({id:data.id, name:data.name}, process.env.SECRETKEY, {expiresIn:'24h'})
            res.status(201).json({token: token})
        }).catch((error) => {
            return res.status(500).json(error)
        })
    } catch (error) {
        return res.status(500).json(error)
    }
}

