const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    bookImg: String,
    bookName: String
})

const Book = mongoose.model('book', booksSchema)

module.exports = Book;