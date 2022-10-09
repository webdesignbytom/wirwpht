const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllUsers = () =>
  prisma.user.findMany({
    skip: 0,
    take: 100,
    orderBy: {
      id: 'asc',
    },
  });

const findUserByEmail = (email) =>
  prisma.user.findUnique({
    where: {
      email: email,
    },
  });

const createUser = (lowerCaseEmail, hashedPassword) =>
  prisma.user.create({
    data: {
      email: lowerCaseEmail,
      password: hashedPassword
    },
    include: {
      profile: false
    }
  });
module.exports = {
  findAllUsers,
  findUserByEmail,
  createUser
};
