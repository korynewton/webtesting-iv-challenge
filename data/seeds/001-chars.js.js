exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function() {
      return knex('hobbits').insert([
        { name: 'Pizza the hut' },
        { name: 'Barf' },
        { name: 'Princess Vespa' },
        { name: 'Dark Helmet' },
      ]);
    });
};
