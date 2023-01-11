const { DishesAvatarRepository } = require('../repositories/DishesAvatarRepository');
const { DishesAvatarService } = require('../services/DishesAvatarService')

const dishesAvatarRepository = new DishesAvatarRepository();
const dishesAvatarService = new DishesAvatarService(dishesAvatarRepository);

class DishesAvatarController {
  async update(request, response) {
    const { id } = request.params;
    const avatarFilename = request.file.filename;

    await dishesAvatarService.execute({ id, avatarFilename })

    return response.json({ avatarFilename });
  }

  // async create(request, response) {
  //   const avatarFilename = request.file.filename;

  //   await dishesAvatarService.create({ avatarFilename })

  //   return response.json({ avatarFilename });
  // }
}

module.exports = { DishesAvatarController }