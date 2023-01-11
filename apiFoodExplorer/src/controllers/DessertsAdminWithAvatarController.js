const { DessertWithAvatarAdminRepository } = require('../repositories/DessertAdminWithAvatarRepository');
const { DessertWithAvatarAdminService } = require('../services/DessertsAdminWithAvatarService');





class DessertsWithAvatarAdminController {
  async createDesserts(request, response) {
    // Parâmetros enviados pelo body
    const { name, description, price, ingredients } = request.body;

    const dishFilename = request.file.filename;

    const dessertWithAvatarAdminRepository = new DessertWithAvatarAdminRepository();
    const dessertWithAvatarAdminService = new DessertWithAvatarAdminService(dessertWithAvatarAdminRepository);

    dessertWithAvatarAdminService.execute({ name, description, price, ingredients, dishFilename })

    return response.status(201).json();
  }




}

module.exports = { DessertsWithAvatarAdminController };