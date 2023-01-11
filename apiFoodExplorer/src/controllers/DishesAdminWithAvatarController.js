const { json } = require('express');
const { DishesWithAvatarAdminRepository } = require('../repositories/DishesAdminWithAvatarRepository');
const { DishesWithAvatarAdminService } = require('../services/DishesAdminWithAvatarService');





class DishesWithAvatarAdminController {
  async createDishes(request, response) {
    // Parâmetros enviados pelo body
    const { name, description, price, ingredients } = request.body;

    const dishFilename = request.file.filename;

    const dishesWithAvatarAdminRepository = new DishesWithAvatarAdminRepository();
    const dishesWithAvatarAdminService = new DishesWithAvatarAdminService(dishesWithAvatarAdminRepository);

    dishesWithAvatarAdminService.execute({ name, description, price, ingredients, dishFilename })

    return response.status(201).json();
  }




}

module.exports = { DishesWithAvatarAdminController };