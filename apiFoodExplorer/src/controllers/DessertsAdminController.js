const { json } = require('express');
const { DessertsAdminRepository } = require('../repositories/DessertsAdminRepository');
const { DessertsAdminService } = require('../services/DessertsAdminService');

class DessertsAdminController {
  async createDessert(request, response) {
    const { name, description, price, image, ingredients } = request.body;

    const dessertsAdminRepository = new DessertsAdminRepository();
    const dessertsAdminService = new DessertsAdminService(dessertsAdminRepository);

    await dessertsAdminService.execute({ name, description, price, image, ingredients });

    return response.json({ name, description, price, image, ingredients });
  }

  async updateDessert(request, response) {
    const { name, description, price, image, ingredients } = request.body;
    const { id } = request.params;

    const dessertsAdminRepository = new DessertsAdminRepository();
    const dessertsAdminService = new DessertsAdminService(dessertsAdminRepository);

    await dessertsAdminService.executeUpdate({ name, description, price, image, id, ingredients });

    return response.json({ name, description, price, image, id, ingredients });

  }

  async deleteDessert(request, response) {
    const { id } = request.params;

    const dessertsAdminRepository = new DessertsAdminRepository();
    const dessertsAdminService = new DessertsAdminService(dessertsAdminRepository);

    await dessertsAdminService.executeDelete({ id });

    return response.json({ id });
  }
}

module.exports = { DessertsAdminController };