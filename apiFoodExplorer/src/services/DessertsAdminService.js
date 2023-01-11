const { AppError } = require('../utils/AppError');

class DessertsAdminService {
  constructor(dessertsAdminRepository) {
    this.dessertsAdminRepository = dessertsAdminRepository;
  }

  async execute({ name, description, price, image, ingredients }) {
    const dessertsAlreadyRegistered = await this.dessertsAdminRepository.searchByName(name);
    if (dessertsAlreadyRegistered.length !== 0) {
      throw new AppError("Drink already is registered");
    }

    const dessertCreated = await this.dessertsAdminRepository.createDessert({ name, description, price, image, ingredients });

    return dessertCreated;

  }

  async executeUpdate({ name, description, price, image, id, ingredients }) {
    const dessert = await this.dessertsAdminRepository.searchById(id);
    if (dessert.length === 0) {
      throw new AppError("Dessert does not exist");
    }

    dessert[0].name = name ?? dessert[0].name;
    dessert[0].description = description ?? dessert[0].description;
    dessert[0].price = price ?? dessert[0].price;
    dessert[0].image = image ?? dessert[0].image;
    dessert[0].ingredients = ingredients ?? dessert[0].ingredients;

    const dessertUpdated = await this.dessertsAdminRepository.updateDessert({
      name: dessert[0].name,
      description: dessert[0].description,
      price: dessert[0].price,
      image: dessert[0].image,
      id: dessert[0].id,
      ingredients: dessert[0].ingredients
    });

    return dessertUpdated;

  }

  async executeDelete({ id }) {
    const dessert = await this.dessertsAdminRepository.searchById(id);
    // console.log(dessert);
    if (dessert.length === 0) {
      throw new AppError("Dessert does not exist");
    }

    const dessertDeleted = await this.dessertsAdminRepository.deleteDessert(id);

    return dessertDeleted;
  }
}

module.exports = { DessertsAdminService };