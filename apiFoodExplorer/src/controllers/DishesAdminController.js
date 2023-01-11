const { json } = require('express');
const { DishesAdminRepository } = require('../repositories/DishesAdminRepository');
const { DishesAdminService } = require('../services/DishesAdminService');

class DishesAdminController {
  async createDishes(request, response) {
    const { name, description, price, image, ingredients } = request.body;

    const dishesAdminRepository = new DishesAdminRepository();
    const dishesAdminService = new DishesAdminService(dishesAdminRepository);

    await dishesAdminService.execute({ name, description, price, image, ingredients });

    return response.json({ name, description, price, image, ingredients });
  }

  async updateDish(request, response) {
    const { name, description, price, image, ingredients } = request.body;
    const { id } = request.params;

    const dishesAdminRepository = new DishesAdminRepository();
    const dishesAdminService = new DishesAdminService(dishesAdminRepository);

    // await dishesAdminService.executeUpdate({ name, description, price, image, id, ingredients });
    await dishesAdminService.executeUpdate({ name, description, price, image, id, ingredients });

    // return response.json({ name, description, price, image, id, ingredients });
    return response.json({ name, description, price, image, id, ingredients });

  }

  async deleteDish(request, response) {
    const { id } = request.params;

    const dishesAdminRepository = new DishesAdminRepository();
    const dishesAdminService = new DishesAdminService(dishesAdminRepository);

    await dishesAdminService.executeDelete({ id });

    return response.json({ id });
  }
}

module.exports = { DishesAdminController };