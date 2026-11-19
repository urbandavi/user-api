
const { DataTypes, Model } = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING(100), allowNull: false,
        validate: { len: { args: [2, 100], msg: 'A név 2-100 karakter legyen' } }
    },
    email: {
        type: DataTypes.STRING(150), allowNull: false, unique: true, validate: { isEmail: { msg: 'Érvénytelen email cím' } }
    },
    password: {
        type: DataTypes.STRING(255), allowNull: false
    },
    role: { type: DataTypes.ENUM('user', 'admin'), allowNull: false, defaultValue: 'user' }
},
    {
        tableName: 'users',
        timestamps: true,
        defaultScope:
        {
            attributes: { exclude: ['password'] }
        },
        scopes: { withPassword: { attributes: {} } }
    }
)

module.exports = User