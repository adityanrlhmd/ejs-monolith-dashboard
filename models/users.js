const bycypt = require('bcrypt')
const User = {
    id: 1,
    username: 'adit@gmail.com',
    password: bycypt.hashSync('adad10', 10),
    login: false
}

module.exports = User