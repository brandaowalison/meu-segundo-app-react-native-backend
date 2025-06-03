const { get } = require('mongoose')
const Ocorrencia = require('../models/ocorrencia')

const createOcorrencia = async(req, res) => {
    try {
        const photo = req.file ? req.file.path : req.body.photo
        const ocorrencia = new Ocorrencia({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            photo: photo,
            latitude: req.body.latitude,
            longitude: req.body.longitude
        })
        await ocorrencia.save()
        res.status(200).json({message: 'Ocorrência adicionada com sucesso', ocorrencia: ocorrencia})
    } catch (err) {
        console.error('Erro ao adicionar ocorrência:', err)
        res.status(500).json({error: 'Erro ao adicionar ocorrência.', details: err.message})
    }
}

const getOcorrencias = async(req, res) => {
    try {
        const ocorrencias = await Ocorrencia.find()
        res.status(201).json(ocorrencias)
    } catch (err) {
        console.error({message: 'Erro ao listar as ocorrências:', err})
        res.status(500).json({error: 'Erro ao listar as ocorrências:', details: err.message})
    }
}

const updateOcorrencia = async(req, res) => {
    const {id} = req.params

    try {
        const updatedOcorrencia = await Ocorrencia.findOneAndUpdate(
            {_id: id},
            req.body,
            {new: true}
        )
        if(!updatedOcorrencia) {
            return res.status(400).json({message: `Não foi encontrada nenhuma ocorrência com essa id=${id}.`})
        }
        res.status(200).json({message: 'Ocorrência atualizada com sucesso!', updatedOcorrencia})
    } catch (err) {
        console.error('Erro ao atualizar ocorrência:', err)
        res.status(500).json({error: 'Erro ao atualizar ocorrência.'})
    }
}

const deleteOcorrenciaById = async(req, res) => {
    const {id} = req.params

    try {
      const deletedOcorrencia = await Ocorrencia.deleteOne({_id: id})
      
      if(deletedOcorrencia.deletedCount === 0) {
        return res.status(404).json({message: `Nenhuma ocorrência encontrada com essa id${id}.`})
      }
      res.status(200).json({message: `Ocorrência com ID=${id} foi deletado com sucesso!`})
    } catch (err) {
        console.error('Erro ao deletar ocorrência:', err)
        res.status(500).json({message: 'Erro ao deletar ocorrência.'})
    }
}
module.exports = {
    createOcorrencia,
    getOcorrencias,
    updateOcorrencia,
    deleteOcorrenciaById
}