const { AppError } = require('../utils/AppError');

class DrinksAdminService {
  constructor(drinksAdminRepository) {
    this.drinksAdminRepository = drinksAdminRepository;
  }

  async execute({ name, description, price, image, ingredients }) {
    const drinksAlreadyRegistered = await this.drinksAdminRepository.searchByName(name);
    if (drinksAlreadyRegistered.length !== 0) {
      throw new AppError("Drink already is registered");
    }

    const drinkCreated = await this.drinksAdminRepository.createDrink({ name, description, price, image, ingredients });

    return drinkCreated;

  }

  async executeUpdate({ name, description, price, image, id, ingredients }) {
    const drink = await this.drinksAdminRepository.searchById(id);
    if (drink.length === 0) {
      throw new AppError("Drink does not exist");
    }

    drink[0].name = name ?? drink[0].name;
    drink[0].description = description ?? drink[0].description;
    drink[0].price = price ?? drink[0].price;
    drink[0].image = image ?? drink[0].image;
    drink[0].ingredients = ingredients ?? drink[0].ingredients;

    const drinkUpdated = await this.drinksAdminRepository.updateDrink({
      name: drink[0].name,
      description: drink[0].description,
      price: drink[0].price,
      image: drink[0].image,
      id: drink[0].id,
      ingredients: drink[0].ingredients
    });

    return drinkUpdated;

  }

  async executeDelete({ id }) {
    const drink = await this.drinksAdminRepository.searchById(id);
    // console.log(drink);
    if (drink.length === 0) {
      throw new AppError("Drink does not exist");
    }

    const drinkDeleted = await this.drinksAdminRepository.deleteDrink(id);

    return drinkDeleted;
  }
}

module.exports = { DrinksAdminService };