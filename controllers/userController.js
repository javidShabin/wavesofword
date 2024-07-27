const User = require('../models/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Get all users
const getAllUsers = async(req, res) => {
    const user = await User.find({})
    res.json(user)
}

// Add user
const addUser = async(req, res) => {
    const userData = req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds);
    const user = new User({
        ...userData,
        password: hash
    })
    await user.save()
    res.json(user)
}

module.exports = {
    getAllUsers,
    addUser
}