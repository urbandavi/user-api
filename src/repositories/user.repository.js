
const { User } = require('../models')

module.exports = {
    findAll() {
        return User.findAll({ oeder: [['id', 'ASC']] })
    },
    findById(id) {
        return User.findByPk(id)
    },
    findByEmail(email) {
        return User.findOne({ where: { email } })
    },
    findByEmailWithPassword(email) {
        return User.scope('withPassword').findOne({ where: { email } })
    },
    async create(data) {
        const user = await User.create(data);
        return this.findById(user.id);
    },
    async update(id, data) {
        const [count] = await User.update(data, { where: { id } })
        return count === 0 ? null : this.findById(id)
    },
    async remove(id){
        return (await User.destroy({where:{id}}))>0
    }
}