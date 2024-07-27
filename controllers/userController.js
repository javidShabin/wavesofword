const User = require('../models/userModel')

// Get all users
const getAllUsers = async(req, res) => {
    const user = await User.find({})
}

// Add user
const addUser = async(req, res) => {
    const userData = req.body
    const user = new User(userData)
    await user.save()
    res.json(user)
}

module.exports = {
    getAllUsers,
    addUser
}