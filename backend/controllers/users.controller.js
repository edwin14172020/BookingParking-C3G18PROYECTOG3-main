const Model = require('../models/users.model')

module.exports = class Api {
    // El controlador que sera llamado para cada acción
    static async getAll(req, res) {
        try {
            const users = await Model.find()
            res.status(200).json(users)
        } catch (e) {
            res.status(404).json(e.message)
        }
    }

    static async getById(req, res) {
        try {
            const Id = req.params.code
            const reserva = await Model.findOne({code: Id})
            if (!reserva) return res.status(404).json({message: 'No encontrado en la base de datos'})
            res.status(200).json(reserva)
        } catch (e) {
            res.status(400).json(e.message)
        }
    }

    static async create(req, res) {
        try {
            let reserva = req.body
            reserva = await Model.create(reserva)
            res.status(201).json(reserva)
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async update(req, res) {
        try {
            let code = req.params.code
            const toUpdate = req.body
            await Model.updateOne({code: code}, toUpdate)
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }

    static async delete(req, res) {
        try {
            let code = req.params.code
            await Model.deleteOne({code: code})
            res.status(200).json()
        } catch (e) {
            res.status(400).json({message: e.message})
        }
    }
}