const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    bookImg: String
})

const Book = mongoose.model('book', booksSchema)

module.exports = Book;