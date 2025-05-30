const multer = require('multer')
const path = require('path')
const { storage } = require('../utils/cloudinary')

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        const allowedTypes = /jpg|jpeg|png|gif/
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase())
        const mimetype = allowedTypes.test(file.mimetype)
        
        if (extname && mimetype) {
            return cb(null, true)
        } else {
            cb(new Error('Arquivo inválido! Apenas imagens, são permitidos'))
        }
    },
    limits: { fileSize: 50 * 1024 * 1024 } // Limite de 50MB
})
module.exports = upload