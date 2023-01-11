const { AppError } = require('../utils/AppError.js');
const { DiskStorage } = require('../providers/DiskStorage')

class IngredientsAvatarService {
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
}

module.exports = { IngredientsAvatarService }