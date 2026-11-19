const { sequelize } = require('../models');


    (async () => {
        const force = process.argv.includes('--force')
        try {
            await sequelize.sync({ force })
            console.log('Táblák szinkronizálva')
        } catch (error) {
            console.error('Sync hiba: ', error.message);

        }
        finally {
            await sequelize.close()
        }





    })()