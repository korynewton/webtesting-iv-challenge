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
  } catch (error) {
    res.status(500).json({ message: 'error' });
  }
});

server.delete('/:id', async (req, res) => {
  try {
    const deleted = await Chars.remove(req.params.id);
    if (deleted > 0) {
      res.status(200).json({ message: 'successful delete' });
    } else {
      res.status(400).json({ message: 'error' });
    }
  } catch (error) {
    res.status(500).json({ message: 'error in db' });
  }
});

module.exports = server;
