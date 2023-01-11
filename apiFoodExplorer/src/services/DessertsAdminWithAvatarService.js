const { AppError } = require('../utils/AppError');



class DessertWithAvatarAdminService {
  constructor(dessertsWithAvatarAdminRepository) {
    this.dessertsWithAvatarAdminRepository = dessertsWithAvatarAdminRepository;
  }

  async execute({ name, description, price, ingredients, dishFilename }) {
    const dishesAlreadyRegistered = await this.dessertsWithAvatarAdminRepository.searchByName(name);
    if (dishesAlreadyRegistered.length !== 0) {
      throw new AppError("Dish already is registered");
    }



    const dishCreated = await this.dessertsWithAvatarAdminRepository.createDesserts({ name, description, price, ingredients, dishFilename });

    return dishCreated;

  }


}

module.exports = { DessertWithAvatarAdminService };