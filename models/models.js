const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  remove,
  getAll,
};

async function insert(character) {
  const [id] = await db('chars').insert(character);

  return db('chars')
    .where({ id })
    .first();
}

// async function update(id, changes) {
//   return null;
// }

async function remove(id) {
  const deleted = await db('chars')
    .where({ id })
    .delete();
  return deleted;
}

function getAll() {
  return db('chars');
}

// function findById(id) {
//   return null;
// }
