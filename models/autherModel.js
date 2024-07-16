const mongoose = require('mongoose');
const autherSchema = new mongoose.Schema({
    authName: String,
    authImg: String,
    birthYear: Number,
    place: String,
    description: String
})

const Auther = mongoose.model('auther', autherSchema)

module.exports = Auther;