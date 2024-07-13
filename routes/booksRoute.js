const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, DeleteBook } = require('../controllers/bookController')
const router = express.Router()

// Get all books
router.get('/', getAllBooks)
// Get book by Id
router.get('/:bookId', getBookById)
// Add book
router.post('/', addBook)
// Update book
router.patch('/:bookId', updateBook)
// Delete book
router.delete('/:bookId', DeleteBook)

module.exports = router