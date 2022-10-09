const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const findAllItems = () =>
  prisma.item.findMany({
    skip: 0,
    take: 100,
    orderBy: {
      createdAt: 'desc',
    },
  });

const checkItemExists = (name) =>
  prisma.item.findFirst({
    where: {
      name: name,
    },
});

const createItem = (userId, name, imageUrl, desc, cost) =>
  prisma.item.create({
    data: {
      userId: userId,
      name,
      imageUrl,
      desc,
      cost
    },
});


module.exports = {
  findAllItems,
  checkItemExists,
  createItem,
};
