const { AppError } = require('../utils/AppError.js');
const { DiskStorage } = require('../providers/DiskStorage')

class DessertsAvatarService {
  constructor(dessertsAvatarRepository) {
    this.dessertsAvatarRepository = dessertsAvatarRepository;
  }

  async execute({ id, avatarFilename }) {
    const dessertsAvatar = await this.dessertsAvatarRepository.getIdDessert(id);

    const diskStorage = new DiskStorage();

    if (!dessertsAvatar) {
      throw new AppError("Somente administradores podem alterar a foto", 401);
    }

    if (dessertsAvatar.image) {
      await diskStorage.deleteFile(dessertsAvatar.image);
    }
    else {
      console.log('nao tem');
    }

    const filename = await diskStorage.saveFile(avatarFilename);
    dessertsAvatar.image = filename;

    const saveAvatar = await this.dessertsAvatarRepository.saveAvatar(avatarFilename, dessertsAvatar.id);

    return saveAvatar;

  }
}

module.exports = { DessertsAvatarService }