const Book = require('../models/bookModel')

// Get all books
const getAllBooks = async (req, res) => {
    res.send("Ok Get all books")
}
// Get book by Id
const getBookById = async (req, res) => {
    res.send("Ok Get all books")
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
    getBookById,
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