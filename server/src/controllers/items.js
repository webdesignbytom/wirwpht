const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findAllItems, checkItemExists, createItem } = require('../domain/items');

const getAllItems = async (req, res) => {
  console.log('getting all item');

  try {
    const items = await findAllItems();
    console.log('items', items);

    res.status(200).json({ data: items });
  } catch (error) {
    res.status(500).json({ error: 'Sorry' });
  }
};

const createNewItem = async (req, res) => {
  console.log('creating new item');
  const { name, imageUrl, desc, cost } = req.body;
  const id = 1;

  console.log('name', name, imageUrl, desc, cost);

  try {
    const foundItem = await checkItemExists(name);
    console.log('found', foundItem);

    if (foundItem) {
      return res
        .status(409)
        .json({ error: { msg: 'Item with that name already exists' } });
    }

    const newItem = await createItem(id, name, imageUrl, desc, cost)
    res.status(201).json({ data: newItem })

  } catch (error) {
    res.status(500).json({ error: { msg: '500 fail' } });
  }
};

module.exports = {
  getAllItems,
  createNewItem,
};
