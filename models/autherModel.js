const mongoose = require('mongoose');
const autherSchema = new mongoose.Schema({
    autherName: String,
    authImg: String,
    description: String
})

const Auther = mongoose.model('auther', autherSchema)

module.exports = Auther;