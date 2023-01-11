
const { SearchDishesRepository } = require('../repositories/SearchDishesRepository');
const { SearchDishesService } = require('../services/SearchDishesService');

const { connectionKnex } = require('../database/knex/index');
const { response } = require('express');


class SearchDishesController {

  async searchDish(request, response) {
    const { name, ingredients } = request.query;

    const searchDishesRepository = new SearchDishesRepository();
    const searchDishesService = new SearchDishesService(searchDishesRepository);

    await searchDishesService.executeSearch(name, ingredients);

    const search = await searchDishesService.executeSearch(name, ingredients);

    return response.json(search);
  }


}

module.exports = { SearchDishesController }