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
    res.send("Ok Get all books")
}
// Delete book
const DeleteBook = async (req, res) => {
    res.send("Ok Get all books")
}

module.exports = {
    getAllBooks,
    getBookId,
    addBook,
    updateBook,
    DeleteBook
}

// const addGenre = async (req, res) => {
//     const genreData = req.body;
//     const genre = new Genre(genreData)
//     await genre.save()
//     res.json(genre)
//     res.send("add Genre")
// }