
const { DrinksRepository } = require('../repositories/DrinksRepository');
const { DrinksService } = require('../services/DrinksService');

const { connectionKnex } = require('../database/knex/index');


class DrinksController {

  async showDrinks(request, response) {
    const { id } = request.params;

    const drinksRepository = new DrinksRepository();
    const drinksService = new DrinksService(drinksRepository);

    await drinksService.executeShow(id);

    const drink = await drinksService.executeShow(id);

    return response.json(drink);

  }

  async indexDrinks(request, response) {


    //
    const drinksRepository = new DrinksRepository();
    const drinksService = new DrinksService(drinksRepository);

    await drinksService.executeIndex();

    const drinks = await drinksService.executeIndex();

    return response.json(drinks);
    ////////////////////////////////////////////////




  }
}

module.exports = { DrinksController }