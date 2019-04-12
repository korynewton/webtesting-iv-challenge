exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('chars')
    .truncate()
    .then(function() {
      return knex('chars').insert([
        { name: 'Pizza the hut' },
        { name: 'Barf' },
        { name: 'Princess Vespa' },
        { name: 'Dark Helmet' },
      ]);
    });
};
