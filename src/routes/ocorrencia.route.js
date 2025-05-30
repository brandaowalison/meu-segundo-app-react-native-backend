const express = require('express')
const ocorrenciaController = require('../controllers/ocorrencia.controller')
const upload = require('../midllewares/upload')
const router = express.Router()


router.post('/', upload.single('photo'), ocorrenciaController.createOcorrencia)
router.get('/', ocorrenciaController.getOcorrencias)
router.put('/:id', ocorrenciaController.updateOcorrencia)
router.delete('/:id', ocorrenciaController.deleteOcorrenciaById)
module.exports = router