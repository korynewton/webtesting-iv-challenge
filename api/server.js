const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.json({ message: 'Get working' });
});

module.exports = server;
