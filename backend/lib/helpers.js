const bcrypt = require('bcryptjs');
module.exports = {
    encryptPassword: async (req, res, next) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        //return hash;
        req.body.password = hash
        next()
    },
    matchPassword: (password, savedPassword) => {
        return bcrypt.compareSync(password, savedPassword)
    }
}