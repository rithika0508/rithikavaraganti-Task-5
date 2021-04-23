const mongoose = require('mongoose')

const imageschema = mongoose.Schema({
    image: {
        type: Buffer
    }
})
const imagemodel = mongoose.model('gcc-task5',imageschema)

module.exports = imagemodel