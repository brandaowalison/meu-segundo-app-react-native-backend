const mongoose = require('mongoose')

const ocorrenciaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true
    },
    descricao: {
        type: String,
        trim: true
    },
    dataOcorrido: {
        type: Date,
        default: Date.now
    },
    photo: {
        type: String,
        validate: {
            validator: function(value) {
                const validExtensions = /\.(jpg|jpeg|png|gif|pdf|mp4|avi|mov|mkv|webm)$/i
                const isHttpUrl = /^https?:\/\/.+/i.test(value)
                const hasValidExtension = validExtensions.test(value)
                const isRawUpload = value.includes('/raw/upload/')
                
                return isHttpUrl && (hasValidExtension || isRawUpload)
            },
                message: props => `${props.value} não é uma URL válida com extensão permitida (.jpg, .png, .gif, .pdf, .mp4, .mov, etc.)`
        } 
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
}, {timestamps: true})

const Ocorrencia = mongoose.model('Ocorrencia', ocorrenciaSchema)
module.exports = Ocorrencia