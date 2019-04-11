const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('GET connected');
});

module.exports = server;
