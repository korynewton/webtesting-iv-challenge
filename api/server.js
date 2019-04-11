const express = require('express');
const Chars = require('../models/models');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.json({ message: 'Get working' });
});

server.post('/add', async (req, res) => {
  try {
    const character = await Chars.insert(req.body);
    res.status(200).json(character);
  } catch {
    res.status(500).json({ message: 'error' });
  }
});

module.exports = server;
