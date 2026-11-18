const {Sequelize} = require('sequelize')
const config = require('../config')

const sequelize = new Sequelize(config.db.name, config.db.user, config.db.pass, {
    host: config.db.host,
    port: config.db.port,
    dialect: 'mysql',
    logging: config.db.logging ? (sql) => console.log('[SQL]', sql) : false, 
    define: {underscored: true}
})

module.exports = sequelize