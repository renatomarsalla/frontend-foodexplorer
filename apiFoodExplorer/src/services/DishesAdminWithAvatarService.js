const { AppError } = require('../utils/AppError');



class DishesWithAvatarAdminService {
  constructor(dishesWithAvatarAdminRepository) {
    this.dishesWithAvatarAdminRepository = dishesWithAvatarAdminRepository;
  }

  async execute({ name, description, price, ingredients, dishFilename }) {
    const dishesAlreadyRegistered = await this.dishesWithAvatarAdminRepository.searchByName(name);
    if (dishesAlreadyRegistered.length !== 0) {
      throw new AppError("Dish already is registered");
    }



    const dishCreated = await this.dishesWithAvatarAdminRepository.createDishes({ name, description, price, ingredients, dishFilename });

    return dishCreated;

  }


}

module.exports = { DishesWithAvatarAdminService };