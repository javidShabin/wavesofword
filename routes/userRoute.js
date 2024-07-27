const express = require('express')
const { getAllUsers, addUser } = require('../controllers/userController')
const router = express.Router()

// Get all users
router.get("/", getAllUsers)

// Add user
router.post("/", addUser)

module.exports = router