const { AppError } = require('../utils/AppError');

class DishesAdminService {
  constructor(dishesAdminRepository) {
    this.dishesAdminRepository = dishesAdminRepository;
  }

  // async execute({ name, description, price, image, ingredients }) {
  //   const dishesAlreadyRegistered = await this.dishesAdminRepository.searchByName(name);
  //   if (dishesAlreadyRegistered.length !== 0) {
  //     throw new AppError("Dish already is registered");
  //   }

  //   const dishCreated = await this.dishesAdminRepository.createDishes({ name, description, price, image, ingredients });

  //   return dishCreated;

  // }

  async executeUpdate({ name, description, price, image, id, ingredients }) {
    const dish = await this.dishesAdminRepository.searchById(id);
    if (dish.length === 0) {
      throw new AppError("Dish does not exist");
    }

    dish[0].name = name ?? dish[0].name;
    dish[0].description = description ?? dish[0].description;
    dish[0].price = price ?? dish[0].price;
    dish[0].image = image ?? dish[0].image;
    dish[0].ingredients = ingredients ?? dish[0].ingredients;

    const dishUpdated = await this.dishesAdminRepository.updateDishes({
      name: dish[0].name,
      description: dish[0].description,
      price: dish[0].price,
      image: dish[0].image,
      id: dish[0].id,
      ingredients: dish[0].ingredients
    });

    return dishUpdated;

  }

  async executeDelete({ id }) {
    const dish = await this.dishesAdminRepository.searchById(id);
    // console.log(dish);
    if (dish.length === 0) {
      throw new AppError("Dish does not exist");
    }

    const dishDeleted = await this.dishesAdminRepository.deleteDish(id);

    return dishDeleted;
  }
}

module.exports = { DishesAdminService };