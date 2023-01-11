const knex = require('knex');
const configKnex = require('../../../knexfile.js');

const connectionKnex = knex(configKnex.development);

module.exports = { connectionKnex };