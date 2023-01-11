const { AppError } = require('../utils/AppError.js');
const { DiskStorage } = require('../providers/DiskStorage')

class DrinksAvatarService {
  constructor(drinksAvatarRepository) {
    this.drinksAvatarRepository = drinksAvatarRepository;
  }

  async execute({ id, avatarFilename }) {
    const drinksAvatar = await this.drinksAvatarRepository.getIdDish(id);

    const diskStorage = new DiskStorage();

    if (!drinksAvatar) {
      throw new AppError("Somente administradores podem alterar a foto", 401);
    }

    if (drinksAvatar.image) {
      await diskStorage.deleteFile(drinksAvatar.image);
    }
    else {
      console.log('nao tem');
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    drinksAvatar.image = filename;

    const saveAvatar = await this.drinksAvatarRepository.saveAvatar(avatarFilename, drinksAvatar.id);

    return saveAvatar;

  }
}

module.exports = { DrinksAvatarService }