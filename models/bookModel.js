const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    bookImg: String,
    bookName: String
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book;