const { AppError } = require('../utils/AppError.js');
const { DiskStorage } = require('../providers/DiskStorage')

class DishesAvatarService {
  constructor(dishesAvatarRepository) {
    this.dishesAvatarRepository = dishesAvatarRepository;
  }

  async execute({ id, avatarFilename }) {
    const dishesAvatar = await this.dishesAvatarRepository.getIdDish(id);

    const diskStorage = new DiskStorage();

    if (!dishesAvatar) {
      throw new AppError("Somente administradores podem alterar a foto", 401);
    }

    if (dishesAvatar.image) {
      await diskStorage.deleteFile(dishesAvatar.image);
    }
    else {
      console.log('nao tem');
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    dishesAvatar.image = filename;

    const saveAvatar = await this.dishesAvatarRepository.saveAvatar(avatarFilename, dishesAvatar.id);

    return saveAvatar;

  }

  // async create({ id, avatarFilename }) {
  //   const dishesAvatar = await this.dishesAvatarRepository.getIdDish(id);

  //   const diskStorage = new DiskStorage();

  //   const filename = await diskStorage.saveFile(avatarFilename);
  //   dishesAvatar.image = filename;

  //   const saveAvatar = await this.dishesAvatarRepository.createAvatar(avatarFilename);

  //   return saveAvatar;
  // }
}

module.exports = { DishesAvatarService }