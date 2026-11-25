const { create, update } = require("../repositories/user.repository");
const userService = require("../services/user.service");


module.exports = {
    list: async (req, res) => {
        res.json(await userService.getAll())
    },
    get: async (req, res) => {
        res.json(await userService.getById(req.params.id))
    },
    create: async (req, res) => {
        res.status(201).json(await userService.create(req.body))
    },
    update: async (req, res) => {
        res.json(await userService.update(req.params.id, req.body, req.user))
    },
    remove: async (req, res) => {
        res.status(204).end().json(await userService.remove(req.params.id))
    }





}