const { json } = require('express');
const { DrinksAdminRepository } = require('../repositories/DrinksAdminRepository');
const { DrinksAdminService } = require('../services/DrinksAdminService');

class DrinksAdminController {
  async createDrinks(request, response) {
    const { name, description, price, image, ingredients } = request.body;

    const drinksAdminRepository = new DrinksAdminRepository();
    const drinksAdminService = new DrinksAdminService(drinksAdminRepository);

    await drinksAdminService.execute({ name, description, price, image, ingredients });

    return response.json({ name, description, price, image, ingredients });
  }

  async updateDrink(request, response) {
    const { name, description, price, image, ingredients } = request.body;
    const { id } = request.params;

    const drinksAdminRepository = new DrinksAdminRepository();
    const drinksAdminService = new DrinksAdminService(drinksAdminRepository);

    await drinksAdminService.executeUpdate({ name, description, price, image, id, ingredients });

    return response.json({ name, description, price, image, id, ingredients });

  }

  async deleteDrink(request, response) {
    const { id } = request.params;

    const drinksAdminRepository = new DrinksAdminRepository();
    const drinksAdminService = new DrinksAdminService(drinksAdminRepository);

    await drinksAdminService.executeDelete({ id });

    return response.json({ id });
  }
}

module.exports = { DrinksAdminController };