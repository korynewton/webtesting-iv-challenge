const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

describe('server.js', () => {
  beforeEach(async () => {
    await db('chars').truncate();
  });

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
  describe('POST route', () => {
    it('should respond with status 200', async () => {
      const character = { name: 'Pizza the hut' };
      const res = await request(server)
        .post('/add')
        .send(character);
      expect(res.status).toBe(200);
    });
  });

  describe('Delete route', () => {
    it('should respond with a 200 status', async () => {
      const character = { name: 'Pizza the hut' };
      await request(server)
        .post('/add')
        .send(character);
      const res = await request(server).delete('/1');
      expect(res.status).toBe(200);
    });

    it('should respond with undefined', async () => {
      const res = await request(server).delete('/1');
      expect(res.body.message).toEqual('error');
    });
  });
});
