const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllUsers, findUserByEmail, createUser } = require('../domain/users');

const getAllUsers = async (req, res) => {

  try {
    const users = await findAllUsers();

    res.status(200).json({ data: users })

  } catch (error) {
    res.status(500).json({ error: 'Fail' })
}};


const createNewUser = async (req, res) => {
    console.log('creating new user');
    const { email, password } = req.body

    const lowerCaseEmail = email.toLowerCase()

    try {

        if (!email || !password) {
          return res.status(409).json({ error: { msg: 'Missing fields in request'} })
        }
        const existingUser = await findUserByEmail(lowerCaseEmail)

        if (existingUser) {
            res.status(409).json({ error: { msg: 'This email is already in use' }})
        }
        const hashedPassword = await bcrypt.hash(password, 8);

        const newUser = await createUser(lowerCaseEmail, hashedPassword)
        console.log('user', newUser);
                
        res.status(201).json({ data: newUser })

      } catch (error) {

        res.status(500).json({ error: { msg: '500 fail'} })
      }
}


module.exports = {
  getAllUsers,
  createNewUser
};
