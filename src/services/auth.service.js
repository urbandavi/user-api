const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config')
const userRepository = require('../repositories/user.repository')
const userService = require('../services/user.service')
const AppError = require('../utils/AppError')



const signToken = (user) =>
    jwt.sign({ id: user.id, role: user.role }, config.jwt.secret, { expiresIn: config.jwt.expiresIn });

module.exports = {
    async register({ name, emial, password }) {
        const user = await userService.create({ name, email, password, role: 'user' })
        return { user, token: signToken(user) }
    },
    async login({ email, password }) {
        if (!email || !password) throw new AppError("Email és jelszó kötelező!", 400)
        const user = await userRepository.findByEmailWithPassword(email);
        if (!user || !await bcrypt.compare(password, user.password)) {
            throw new AppError("Hibás emial vagy jelszó!", 400);
        }
        const { password: _, ...safeUser } = user.toJSON
        return { user: safeUser, token: signToken(user) }
    },
    verifyToken(token) {
        try {
            return jwt.verify(token, config.jwt.secret)
        } catch {
            throw new AppError("Érvénytelen vagy lejárt token!", 401);

        }
    }
}

