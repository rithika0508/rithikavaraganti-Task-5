const express = require('express')
const multer = require('multer')
const app = express()
const Image = require('../models/imagesmodel')
const sendEmail = require('../emails/sendMail')

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match('.[png|jpg|jpeg]$')) {
            cb(new Error('The file format should be jpg, jpeg, png'))
        }
        cb(undefined, true)
    }
})

// for posting an image
app.post('/', upload.single('upload'), async (req, res) => {
    const image = new Image({ image: req.file.buffer })
    await image.save()
    sendEmail()
    res.send('Image Uploaded :) ')
}, (error, req, res, next) => {     res.send(error.message)
})

//for seeing the image uploaded

app.get('/image/:id', async (req, res) => {
    try {
        const imagedetails = await Image.findOne({ _id: req.params.id })
        res.set('Content-type', 'image/png')
        res.send(imagedetails.image)
    } catch (error) {
        res.send(error)
    }
})
module.exports = app