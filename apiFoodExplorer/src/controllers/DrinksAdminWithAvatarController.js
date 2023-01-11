const { DrinksWithAvatarAdminRepository } = require('../repositories/DrinksAdminWithAvatarRepository');
const { DrinksWithAvatarAdminService } = require('../services/DrinksAdminWithAvatarService');





class DrinksWithAvatarAdminController {
  async createDrinks(request, response) {
    // Parâmetros enviados pelo body
    const { name, description, price, ingredients } = request.body;

    const dishFilename = request.file.filename;

    const drinksWithAvatarAdminRepository = new DrinksWithAvatarAdminRepository();
    const drinksWithAvatarAdminService = new DrinksWithAvatarAdminService(drinksWithAvatarAdminRepository);

    drinksWithAvatarAdminService.execute({ name, description, price, ingredients, dishFilename })

    return response.status(201).json();
  }




}

module.exports = { DrinksWithAvatarAdminController };