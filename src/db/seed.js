const bcrypt = require('bcrypt');
const { sequelize, User } = require('../models');

const users = [

    {
        name: 'Admin',
        email: 'admin@no.com',
        password: 'admin123',
        role: 'admin'
    },
    {
        name: 'TEszt Elek',
        email: 'teszt@elek.com',
        password: 'test123',
        role: 'user'
    }

];


    (async () => {
        await sequelize.sync()
        for (const u of users) {
            const hash = await bcrypt.hash(u.password, 10)
            await User.findOrCreate({ where: { email: u.email }, defaults: { ...u, password: hash } })
        }
        await sequelize.close();
    })();