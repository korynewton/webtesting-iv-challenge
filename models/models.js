const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
  findById,
};

async function insert(character) {
  const [id] = await db('chars').insert(character);

  return db('chars')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('chars');
}

function findById(id) {
  return null;
}
