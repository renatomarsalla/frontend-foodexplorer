
const { SearchDrinksRepository } = require('../repositories/SearchDrinksRepository');
const { SearchDrinksService } = require('../services/SearchDrinksService');

const { connectionKnex } = require('../database/knex/index');
const { response } = require('express');


class SearchDrinksController {

  async searchDrinks(request, response) {
    const { name, ingredients } = request.query;

    const searchDrinksRepository = new SearchDrinksRepository();
    const searchDrinksService = new SearchDrinksService(searchDrinksRepository);

    await searchDrinksService.executeSearch(name, ingredients);

    const search = await searchDrinksService.executeSearch(name, ingredients);

    return response.json(search);
  }


}

module.exports = { SearchDrinksController }