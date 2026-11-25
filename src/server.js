const app = require('./app')
const config = require('./config')
const {sequelize} = require('./models')

(async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(config.port, ()=> console.log(`Szerver fut: http://localhost:${config.port}`))
    } catch (error) {
        
    }
})()