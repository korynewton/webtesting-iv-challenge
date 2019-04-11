const express = require('express');

const server = express();

server.get('/', () => {
  res.send('Get connected');
});

module.exports = server;
