
const { DessertsRepository } = require('../repositories/DessertsRepository');
const { DessertsService } = require('../services/DessertsService');

const { connectionKnex } = require('../database/knex/index');


class DessertsController {

  async showDesserts(request, response) {
    const { id } = request.params;

    const dessertsRepository = new DessertsRepository();
    const dessertsService = new DessertsService(dessertsRepository);

    await dessertsService.executeShow(id);

    const dessert = await dessertsService.executeShow(id);
    // console.log(dessert);

    return response.json(dessert);

  }

  async indexDesserts(request, response) {

    ////////////////////////////////////////////////
    const dessertsRepository = new DessertsRepository();
    const dessertsService = new DessertsService(dessertsRepository);

    await dessertsService.executeIndex();

    const desserts = await dessertsService.executeIndex();

    return response.json(desserts);
    ////////////////////////////////////////////////




  }
}

module.exports = { DessertsController }