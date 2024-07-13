const express = require('express')
const { getAllAuthers, getAutherById, addAuther, updateAuther, DeleteAuther } = require('../controllers/autherController')
const router = express.Router()

// Get all authers
router.get('/', getAllAuthers)
// Get auther by Id
router.get('/:autherId', getAutherById)
// Add auther
router.post('/', addAuther)
// Update auther
router.patch('/:autherId', updateAuther)
// Delete auther
router.delete('/:autherId', DeleteAuther)

module.exports = router