const { AppError } = require('../utils/AppError');



class DrinksWithAvatarAdminService {
  constructor(drinksWithAvatarAdminRepository) {
    this.drinksWithAvatarAdminRepository = drinksWithAvatarAdminRepository;
  }

  async execute({ name, description, price, ingredients, dishFilename }) {
    const dishesAlreadyRegistered = await this.drinksWithAvatarAdminRepository.searchByName(name);
    if (dishesAlreadyRegistered.length !== 0) {
      throw new AppError("Dish already is registered");
    }



    const dishCreated = await this.drinksWithAvatarAdminRepository.createDrinks({ name, description, price, ingredients, dishFilename });

    return dishCreated;

  }


}

module.exports = { DrinksWithAvatarAdminService };