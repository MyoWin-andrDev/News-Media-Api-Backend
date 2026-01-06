const bcrypt = require('bcryptjs');

module.exports = {
    encodePassword : (password) => bcrypt.hashSync(password, 10),
    comparePassword : (password, hashString) => bcrypt.compareSync(password, hashString)
}