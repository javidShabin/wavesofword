const Book = require('../models/bookModel')

// Get all books
const getAllBooks = async (req, res) => {
    const book = await Book.find({})
    res.json(book)
}
// Get book by Id
const getBookId = async (req, res) => {
    const book = await Book.findById(req.params.bookId).exec()
    res.json(book)
}

// Add books
const addBook = async (req, res) => {
    const bookData = req.body;
    const book = new Book(bookData)
    await book.save()
    res.json(book)
}
//Update book
const updateBook = async (req, res) => {
    const editedBook = await Book.
    findByIdAndUpdate(req.params.bookId, req.body, {new: true})
    res.json(editedBook)
}
// Delete book
const DeleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.bookId)
    res.send("Delete the books")
}

module.exports = {
    getAllBooks,
    getBookId,
    addBook,
    updateBook,
    DeleteBook
}
