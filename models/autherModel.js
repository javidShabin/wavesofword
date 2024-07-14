const mongoose = require('mongoose');
const autherSchema = new mongoose.Schema({
    autherName: String,
    dateOfBirth: Date,
    place: String
})

const Auther = mongoose.model('auther', autherSchema)

module.exports = Auther;