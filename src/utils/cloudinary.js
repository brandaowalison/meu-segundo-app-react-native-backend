const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

cloudinary.config()

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:  {
        folder: 'fotos',
        allowed_formats: ['jpg', 'jpeg', 'png','gif'],
        resource_type: 'image'
    }   
})
module.exports = {storage}