const request = require('supertest');
const server = require('./server');

describe('server', () => {
  describe('GET /', () => {
    it('should respond with status 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
  });
});
