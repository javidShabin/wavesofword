const Auther = require('../models/autherModel')

// Get all books
const getAllAuthers = async (req, res) => {
    const auther = await Auther.find({})
    res.json(auther)
}
// Get Auther by Id
const getAutherById = async (req, res) => {
    const auther = await Auther.findById(req.params.autherId).exec()
    res.json(auther)
}
// Add Authers
const addAuther = async (req, res) => {
    const autherData = req.body
    const auther = new Auther(autherData)
    await Auther.save()
    res.json(auther)
}
//Update Auther
const updateAuther = async (req, res) => {
    res.send("Ok Get all Authers")
}
// Delete Auther
const DeleteAuther = async (req, res) => {
    res.send("Ok Get all Authers")
}

module.exports = {
    getAllAuthers,
    getAutherById,
    addAuther,
    updateAuther,
    DeleteAuther
}