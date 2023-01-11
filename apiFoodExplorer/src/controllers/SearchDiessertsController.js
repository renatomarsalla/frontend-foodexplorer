
const { SearchDessertsRepository } = require('../repositories/SearchDessertsRepository');
const { SearchDessertsService } = require('../services/SearchDessertsService');

const { connectionKnex } = require('../database/knex/index');
const { response } = require('express');


class SearchDessertsController {

  async searchDessert(request, response) {
    const { name, ingredients } = request.query;

    const searchDessertsRepository = new SearchDessertsRepository();
    const searchDessertsService = new SearchDessertsService(searchDessertsRepository);

    await searchDessertsService.executeSearch(name, ingredients);

    const search = await searchDessertsService.executeSearch(name, ingredients);

    return response.json(search);
  }


}

module.exports = { SearchDessertsController }