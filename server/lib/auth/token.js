const jwt = require('jsonwebtoken-promisified');
const sekrit = process.env.APP_SECRET || 'totoro';

module.exports = {
    sign(user) {
        const payload = {
            id: user._id
        };
        const token = jwt.signAsync(payload, sekrit);
        return token;
    },
    verify(token) {
        return jwt.verifyAsync(token, sekrit);
    }
};