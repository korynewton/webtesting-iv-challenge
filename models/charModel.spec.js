const Chars = require('./models');
const db = require('../data/dbConfig');

describe('POST /', async () => {
  beforeEach(async () => {
    await db('chars').truncate();
  });

  it('should be an array 5 items long after adding', async () => {
    await Chars.insert({ name: 'Pizza the Hut' });
    await Chars.insert({ name: 'Princess Vespa' });
    await Chars.insert({ name: 'Dark Helmet' });

    const characters = await Chars.getAll('chars');

    expect(characters).toHaveLength(3);
  });
});
