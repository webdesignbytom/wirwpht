const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../domain/users');

const login = async (req, res) => {
    console.log('logging in');

    const { email, password } = req.body
    console.log('email', email);

    const lowerCaseEmail = email.toLowerCase()

    try {

        const foundUser = await findUserByEmail(lowerCaseEmail)
        console.log('foundUser', foundUser);

        if (!lowerCaseEmail || !password) {
            return res.status(409).json({ error: { msg: `Missing fields in login request`}})
        }

        


    } catch (error) {
        res.status(500).json({ error: { msg: '500 Fail'}})
    }
}

const createAccessToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRY})
}

module.exports = {
    createAccessToken,
    login
}