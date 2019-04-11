const request = require('supertest');
const server = require('./server');

const Chars = require('../models/models');

describe('server.js', () => {
  describe('GET /', () => {
    it('should respond with status 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    it('should return json', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
    it("response should be '{ message: 'Get working' }'", async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ message: 'Get working' });
    });
  });
});
