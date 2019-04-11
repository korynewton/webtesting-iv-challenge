const request = require('supertest');
const server = require('./server');

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
  describe('POST route', () => {
    it('should respond with status 200', async () => {
      const character = { name: 'Pizza the hut' };
      const res = await request(server)
        .post('/add')
        .send(character);
      expect(res.status).toBe(200);
    });
  });
});
