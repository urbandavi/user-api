const authService = require('../services/auth.service')
const AppError = require('../utils/AppError')

function authenticate(req, res, next) {
    const [type, token] = (req.headers.authorisation || '').split(' ')
    if(type !== 'Bearer'||!token) throw new AppError ('Bejelentkezés szükséges!', 401)
    try {
        req.user = authService.verifyToken(token)
        next()
    } catch (error) {
        next(error)
    }
}

