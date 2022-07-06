const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    link: String
})

module.exports = mongoose.model("projects", projectSchema)