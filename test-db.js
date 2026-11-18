const sequelize = require('./src/db/sequelize')


sequelize.authenticate().then(() => {
    console.log("Kapcsolat ok!")
}).catch(err => console.log("Hiba: " + err)).finally(() => { sequelize.close() })